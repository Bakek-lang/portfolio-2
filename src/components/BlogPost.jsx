import Markdown from "markdown-to-jsx";
import CodeBlock from "./CodeBlock";
import { useParams } from "react-router-dom";
import blogPosts from "../js/blogPosts";

export default function BlogPost() {
  const { id } = useParams();
  const blogPost = blogPosts.find((post) => post.id === id);

  if (!blogPost) return <div className="text-white p-4">Post not found.</div>;
  return (
    <article className="prose prose-invert p-4 max-w-screen-xl mx-auto ">
      <Markdown
        options={{
          overrides: {
            code: {
              component: CodeBlock,
            },
          },
        }}
      >
        {blogPost.content}
      </Markdown>
    </article>
  );
}
