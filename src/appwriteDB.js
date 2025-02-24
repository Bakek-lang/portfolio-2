import { Query } from "appwrite";
import { databases } from "./js/appwrite";

export const getComments = async () => {
  try {
    const response = await databases.listDocuments(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      import.meta.env.VITE_APPWRITE_GUESTBOOK_COLLECTION_ID,
      [Query.orderDesc("$createdAt")]
    );
    return response.documents;
  } catch (error) {
    console.error("Error fetching comments: ", error);
    return [];
  }
};
