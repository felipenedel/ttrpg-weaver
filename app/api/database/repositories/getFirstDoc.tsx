import {DocumentData, getDocs, Query} from 'firebase/firestore';

export async function getFirstDoc<T = DocumentData>(q: Query): Promise<T> {
  const snap = await getDocs(q);

  return snap.docs[0]?.data() as T || (() => {
    throw new Error('No document found');
  })();
}
