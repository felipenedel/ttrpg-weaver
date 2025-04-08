// TODO
// "5": "Minority or foreigners; reroll on 1d4",
// "6": "Offworlders or exotics; reroll on 1d4"

import {db} from '@firestore/firestoreClient';
import {collection, doc, setDoc,} from "firebase/firestore";
import {readFileSync} from "node:fs";

const migrations = [
  {"type": "npc", "seed": "app/api/database/firestore/migrations/seed_data/002_one_roll_npc.json"},
  {"type": "patron", "seed": "app/api/database/firestore/migrations/seed_data/003_one_roll_patron.json"},
  {"type": "urban_encounter", "seed": "app/api/database/firestore/migrations/seed_data/004_one_roll_urban_encounter.json"},
  {"type": "wilderness_encounter", "seed": "app/api/database/firestore/migrations/seed_data/005_one_roll_wilderness_encounter.json"}
]

async function execute(data, type) {
  for (const [key, value] of Object.entries(data)) {
    const typed = value as Record<string, string>;
    const paddedSorted = Object.fromEntries(
      Object.entries(typed)
        .map(([key, value]) => [key.padStart(2, '0'), value])
        .sort(([a], [b]) => a.localeCompare(b))
    );

    console.log(paddedSorted)
    const npcCollectionRef = collection(db, `reference_tables/one_roll/${type}`);

    const docRef = doc(npcCollectionRef, key);
    await setDoc(docRef, paddedSorted);
    console.log(`✅ Uploaded: ${key}`);
  }
}

async function run() {
  for (const migration of migrations) {
    const {type, seed} = migration;
    const data = JSON.parse(readFileSync(seed, 'utf-8'));
    console.log(`Uploading ${type} data...`);
    await execute(data, type);
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
