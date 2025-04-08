import {collection, limit, query, where,} from 'firebase/firestore';
import {db} from '@firestore/firestoreClient';
import {getFirstDoc} from "@firestore/getFirstDoc";

const REFERENCE_TABLES_COLLECTION = 'reference_tables';
const NAME_GENERATOR_COLLECTION = 'name_generator';

export interface NameGeneratorType {
  id: string;
  rollMin: number;
  rollMax: number;
  name: string;
}

export const NameGeneratorRepository = {
  async getRandomName(): Promise<NameGeneratorType> {
    const roll = Math.floor(Math.random() * 10) + 1;

    const q = query(
      collection(db, REFERENCE_TABLES_COLLECTION, NAME_GENERATOR_COLLECTION, "names"),
      where('roll_max', '>=', roll),
      where('roll_min', '<=', roll),
      limit(1)
    );

    return getFirstDoc<NameGeneratorType>(q);
  },
};

// (\d+)-(\d+) (\l+) (\l+) (\l+) (.+)
// { "name_male": "$4", "name_female": "$5", "surname": "$6", "roll_min": $2, "roll_max": $3 },
