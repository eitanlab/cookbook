import { firestore } from "../firebase/clientApp";
import {
  collection,
  QueryDocumentSnapshot,
  DocumentData,
  query,
  where,
  limit,
  getDocs,
} from "@firebase/firestore";

export const useGetDocuments = async ({collectionName}) => {
  const payload = collection(firestore, collectionName);
    // get the collection
    const querySnapshot = await getDocs(payload);
    // map through documents inside the collection adding them to an array
    const result = [];
    querySnapshot.forEach((doc) => {
      result.push({ id: doc.id, ...doc.data() });
    });
    // set it to state
    return result;
};

export const useGetRecipesByCategory = async ({collectionName, category}) => {
  const payload = query(
    collection(firestore, collectionName), 
    where('category', '==', category));
  // get the collection
  const querySnapshot = await getDocs(payload);
  // map through documents inside the collection adding them to an array
  const result = [];
  querySnapshot.forEach((doc) => {
    result.push({ id: doc.id, ...doc.data() });
  });
  // set it to state
  return result;
};