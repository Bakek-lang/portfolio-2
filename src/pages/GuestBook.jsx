import { useEffect, useState } from "react";
import {
  checkUserSession,
  handleOAuthCallBack,
  login,
  logout,
} from "../js/appwriteAuth";

export default function GuestBook() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      await handleOAuthCallBack();
      const userData = await checkUserSession();
      console.log("Fetched User: ", userData);
      setUser(userData);
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return (
    <div className="flex flex-col items-center">
      <h1>Guestbook</h1>
      {user ? (
        <div>
          <p>Welcome, {user.name} </p>
          <button
            onClick={handleLogout}
            className="bg-black text-white rounded-lg px-3 py-2 cursor-pointer"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={login}
          className="bg-black text-white rounded-lg px-3 py-2 cursor-pointer"
        >
          Login with GitHub
        </button>
      )}
    </div>
  );
}
