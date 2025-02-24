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

export const getUserComment = async (userId) => {
  try {
    const response = await databases.listDocuments(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      import.meta.env.VITE_APPWRITE_GUESTBOOK_COLLECTION_ID,
      [Query.equal("userId", userId)]
    );
    console.log("this is response from getUserComment: ", response);
    return response;
  } catch (error) {
    console.error("Error fetching user comment: ", error);
    return [];
  }
};

export const postComment = async (commentData) => {
  try {
    const existing = await getUserComment(commentData.userId);
    console.log("existing: ", existing);
    if (existing.documents && existing.total > 0) {
      throw new Error("You have already posted a comment.");
    }
    const response = await databases.createDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      import.meta.env.VITE_APPWRITE_GUESTBOOK_COLLECTION_ID,
      "unique()",
      commentData
    );
    return response;
  } catch (error) {
    console.error("Error posting comment:", error);
    throw error;
  }
};

export const deleteComment = async (documentId) => {
  try {
    const response = await databases.deleteDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      import.meta.env.VITE_APPWRITE_GUESTBOOK_COLLECTION_ID,
      documentId
    );
    return response;
  } catch (error) {
    console.error("Error deleting comment:", error);
    throw error;
  }
};
