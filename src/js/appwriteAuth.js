import { account } from "./appwrite";

export const checkUserSession = async () => {
  try {
    const user = await account.get();
    return user;
  } catch (error) {
    console.log("Error getting account status: ", error);
    return null;
  }
};
