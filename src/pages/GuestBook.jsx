import { useEffect, useState } from "react";
import {
  checkUserSession,
  handleOAuthCallBack,
  login,
  logout,
} from "../js/appwriteAuth";
import { deleteComment, getComments, getUserComment } from "../appwriteDB";
import CommentForm from "../components/CommentForm";
import { FaGithub, FaRegTrashAlt } from "react-icons/fa";

export default function GuestBook() {
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [userHasComment, setUserHasComment] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      await handleOAuthCallBack();
      const userData = await checkUserSession();
      setUser(userData);

      const fetchedComments = await getComments();
      setComments(fetchedComments);

      if (userData) {
        const userComments = await getUserComment(userData.$id);
        setUserHasComment(userComments.total > 0);
      }
      setLoading(false);
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

      if (user) {
        const userComments = await getUserComment(user.$id);
        setUserHasComment(userComments.total > 0);
      }
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center  min-h-screen mt-8">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-purple-700"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl text-white mt-4">Guestbook</h1>

      {user ? (
        <div className="flex flex-col w-full max-w-2xl gap-2 ">
          <p className="font-bold text-white">Signed in as {user.name}</p>

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
          <button
            onClick={handleLogout}
            className="bg-white text-black rounded-lg px-3 py-2 cursor-pointer w-25"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="bg-white flex justify-center items-center px-3 py-2 rounded-lg mt-4">
          <FaGithub size={25} />
          <button
            onClick={login}
            className="bg-white text-black rounded-lg px-3 py-2 cursor-pointer"
          >
            Sign in with GitHub
          </button>
        </div>
      )}

      <div className="mt-4 rounded-xl  w-full max-w-3xl ">
        <h2 className="text-white font-bold text-4xl p-4">Comments</h2>
        <div className="w-full border-b border-gray-300"></div>
        {comments.map((comment) => (
          <div key={comment.$id} className="  p-4 my-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="font-bold text-white">{comment.username}</span>
              </div>
              {user && comment.userId === user.$id && (
                <button
                  onClick={() => handleDeleteComment(comment.$id)}
                  className="text-white text-sm cursor-pointer"
                >
                  <FaRegTrashAlt size={18} />
                </button>
              )}
            </div>
            <p className="text-gray-300">{comment.text}</p>
            <p className="text-sm text-gray-400">
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
