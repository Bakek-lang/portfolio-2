import { useState } from "react";
import { postComment } from "../appwriteDB";

export default function CommentForm({ user, onCommentPosted }) {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    try {
      const commentData = {
        text: text.trim(),
        userId: user.$id,
        username: user.name,
        createdAt: new Date().toISOString(),
      };
      const newComment = await postComment(commentData);
      onCommentPosted(newComment);
      setText("");
    } catch (error) {
      console.error("Failed to post comment:", error);
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Your comment..."
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="mt-2 bg-green-600 text-white rounded-lg px-4 py-2 cursor-pointer"
      >
        Submit Comment
      </button>
    </form>
  );
}
