import { account } from "./appwrite";

export const checkUserSession = async () => {
  try {
    const user = await account.get();
    return user;
  } catch (error) {
    if (error.code === 401) {
      console.log("the error code was 401");
      return null;
    }
    console.log("Error getting account status: ", error);
    return null;
  }
};

export const login = async () => {
  const baseUrl = window.location.origin;
  console.log("account", account);

  try {
    const response = await account.createOAuth2Token(
      "github",
      `${baseUrl}/guestbook`,
      `${baseUrl}/guestbook`
    );

    console.log("OAuth response: ", response);
  } catch (error) {
    console.error("Login error: ", error);
  }
};

export const logout = async () => {
  try {
    account.deleteSession("current");
  } catch (error) {
    console.error("Logout failed:", error);
  }
};

export const handleOAuthCallBack = async () => {
  const params = new URLSearchParams(window.location.search);
  const secret = params.get("secret");
  const userId = params.get("userId");

  console.log("secret: ", secret);
  console.log("UserId:", userId);

  if (secret) {
    try {
      await account.createSession(userId, secret);
      console.log("Session created successfully!");

      window.history.replaceState({}, document.title, window.location.pathname);
    } catch (error) {
      console.error("Error creating session with OAuth callback: ", error);
    }
  }
};
