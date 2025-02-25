import { useEffect, useState } from "react";
import {
  checkUserSession,
  handleOAuthCallBack,
  login,
  logout,
} from "../js/appwriteAuth";
import { deleteComment, getComments, getUserComment } from "../appwriteDB";
import CommentForm from "../components/CommentForm";

export default function GuestBook() {
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [userHasComment, setUserHasComment] = useState(false);

  useEffect(() => {
    const init = async () => {
      await handleOAuthCallBack();
      const userData = await checkUserSession();
      console.log("Fetched User: ", userData);
      setUser(userData);

      const fetchedComments = await getComments();
      setComments(fetchedComments);

      if (userData) {
        const userComments = await getUserComment(userData.$id);
        setUserHasComment(userComments.total > 0);
      }
    };

    init();
  }, []);

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  function addComment(newComment) {
    setComments((prev) => [newComment, ...prev]);
    setUserHasComment(true);
  }

  async function handleDeleteComment(commentId) {
    try {
      await deleteComment(commentId);
      setComments((prev) =>
        prev.filter((comment) => comment.$id !== commentId)
      );
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  }

  return (
    <div className="flex flex-col items-center">
      <h1>Guestbook</h1>

      {user ? (
        <div>
          <p>Welcome, {user.name}</p>
          <button
            onClick={handleLogout}
            className="bg-black text-white rounded-lg px-3 py-2 cursor-pointer"
          >
            Logout
          </button>
          {!userHasComment ? (
            <CommentForm user={user} onCommentPosted={addComment} />
          ) : (
            <div className="p-4 bg-yellow-100 border border-yellow-300 rounded">
              <p className="text-gray-700">
                You have already posted a comment.
              </p>
              <p className="text-gray-600 text-sm">
                If you want to change it, please delete your current comment
                first.
              </p>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={login}
          className="bg-black text-white rounded-lg px-3 py-2 cursor-pointer"
        >
          Login with GitHub
        </button>
      )}

      <div className="mt-4 w-full max-w-lg">
        {comments.map((comment) => (
          <div key={comment.$id} className="border p-2 my-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="font-bold">{comment.username}</span>
              </div>
              {user && comment.userId === user.$id && (
                <button
                  onClick={() => handleDeleteComment(comment.$id)}
                  className="text-red-500 text-sm cursor-pointer"
                >
                  Delete
                </button>
              )}
            </div>
            <p>{comment.text}</p>
            <p className="text-sm">
              {new Date(comment.createdAt).toLocaleString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
