import { Link } from "react-router-dom";
import blogPosts from "../js/blogPosts";

export default function BlogOverview() {
  return (
    <div className="text-white p-4 flex flex-col items-center">
      <h1 className="text-center text-3xl font-bold mb-8">BLOG</h1>
      <ul className="list-disc ">
        {blogPosts.map((post) => (
          <li key={post.id} className="mt-2">
            <Link
              to={`/blog/${post.id}`}
              className="text-white hover:underline "
            >
              {post.title} - ({post.created})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
