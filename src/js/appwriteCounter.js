import { databases } from "./appwrite";

export const visitorCounter = async () => {
  try {
    const doc = await databases.getDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      import.meta.env.VITE_APPWRITE_SITEDATA_COLLECTION_ID,
      import.meta.env.VITE_APPWRITE_SITEDATA_COUNTER_DOCUMENT_ID
    );

    const newCount = doc.count + 1;

    await databases.updateDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      import.meta.env.VITE_APPWRITE_SITEDATA_COLLECTION_ID,
      import.meta.env.VITE_APPWRITE_SITEDATA_COUNTER_DOCUMENT_ID,
      { count: newCount }
    );

    return newCount;
  } catch (error) {
    console.error("Error updating count: ", error);
  }
};
