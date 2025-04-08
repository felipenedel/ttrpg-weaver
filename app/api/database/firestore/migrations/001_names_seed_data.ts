import {db} from '@firestore/firestoreClient';
import {collection, doc, setDoc,} from "firebase/firestore";
import {createReadStream} from "fs";
import {parser} from "stream-json";
import {streamObject} from "stream-json/streamers/StreamObject";

async function upload(language: string, langData: { names: [], places: [] }) {
  // Set the meta doc with the language field
  const langDocRef = doc(db, "reference_tables", "name_generator", "languages", language);
  await setDoc(langDocRef, {language});

  // Add names
  for (const [index, name] of Object.entries(langData.names)) {
    const docId = (Number(index) + 1).toString().padStart(2, "0");
    const namesItemsRef = collection(db, `reference_tables/name_generator/languages/${language}/names`);
    const nameDocRef = doc(namesItemsRef, docId); // use index as ID
    await setDoc(nameDocRef, name);
  }

  // Add places
  for (const [index, place] of Object.entries(langData.places)) {
    const docId = (Number(index) + 1).toString().padStart(2, "0");
    const placesItemsRef = collection(db, `reference_tables/name_generator/languages/${language}/places`);
    const placeDocRef = doc(placesItemsRef, docId); // use index as ID
    await setDoc(placeDocRef, place);
  }

  console.log(`✅ Uploaded data for: ${language}`);
}

function streamAndUploadLanguage(targetLanguage: string) {
  return new Promise<void>((resolve, reject) => {
    const stream = createReadStream("./resources/001_names_seed_data.json")
      .pipe(parser())
      .pipe(streamObject());

    stream.on("data", async ({key, value}) => {
      if (key === targetLanguage) {
        stream.destroy(); // stop reading once we got what we want
        try {
          await upload(key, value);
          resolve();
        } catch (err) {
          reject(err);
        }
      }
    });

    stream.on("end", () => reject(new Error(`Language "${targetLanguage}" not found in file.`)));
    stream.on("error", reject);
  });
}

async function run() {
  const languages = ["arabic", "chinese", "english", "greek", "indian", "japanese", "latin", "nigerian", "russian", "spanish"];

  for (const language of languages) {
    try {
      await streamAndUploadLanguage(language);
      console.log(`🎉 Done with ${language}`);
    } catch (error) {
      console.error(`❌ Failed with ${language}:`, error);
    }
  }
}

run()
  .then(() => {
    console.log("✅ All uploads finished.");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ Migration failed:", err);
    process.exit(1);
  });
