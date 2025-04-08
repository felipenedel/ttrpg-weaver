import {collection, limit, query, where,} from 'firebase/firestore';
import {db} from '@firestore/firestoreClient';
import {getFirstDoc} from '@repositories/getFirstDoc';
import {toPascalCase} from "@services/pascalCase";

const LANGUAGES = ["arabic", "chinese", "english", "greek", "indian", "japanese", "latin", "nigerian", "russian", "spanish"];

export interface NameGeneratorType {
  id: string;
  nameMale: string;
  nameFemale: string;
  surname: string;
  placeName: string;
  language: string
}

const getLanguage = (language: string | null) => {
  return language || LANGUAGES[Math.floor(Math.random() * LANGUAGES.length)];
}

export const NameGeneratorRepository = {
  async getRandomName(language: string | null): Promise<NameGeneratorType> {
    const languageCollection = getLanguage(language);
    const namesRef = collection(db, `reference_tables/name_generator/languages/${languageCollection}/names`);
    const placesRef = collection(db, `reference_tables/name_generator/languages/${languageCollection}/places`);

    const nameRoll = Math.floor(Math.random() * 100) + 1;
    const placeRoll = Math.floor(Math.random() * 100) + 1;

    const nameQuery = query(
      namesRef,
      where('roll_max', '>=', nameRoll),
      where('roll_min', '<=', nameRoll),
      limit(1)
    );

    const placeQuery = query(
      placesRef,
      where('roll_max', '>=', placeRoll),
      where('roll_min', '<=', placeRoll),
      limit(1)
    );

    const nameData = await getFirstDoc<NameGeneratorType>(nameQuery);
    const placeData = await getFirstDoc<NameGeneratorType>(placeQuery);

    return {...toPascalCase(nameData), ...toPascalCase(placeData), language: languageCollection} as NameGeneratorType;
  },
};
