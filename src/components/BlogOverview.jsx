import { Link } from "react-router-dom";
import blogPosts from "../js/blogPosts";

export default function BlogOverview() {
  return (
    <div className="text-white p-4">
      <h1 className="text-center text-3xl font-bold mb-4">BLOG SITE</h1>
      <ul className="list-disc ml-8 space-y-2">
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link
              to={`/blog/${post.id}`}
              className="text-blue-400 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
