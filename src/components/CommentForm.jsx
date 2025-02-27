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
    <form onSubmit={handleSubmit} className="flex gap-2 mt-2 max-w-3xl w-full">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Your comment..."
        className="w-2/3 p-2 border rounded text-white"
      />
      <button
        type="submit"
        className="w-1/3 bg-purple-700 text-white rounded-md px-3 py-2 cursor-pointer"
      >
        Submit Comment
      </button>
    </form>
  );
}
