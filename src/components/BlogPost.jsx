import Markdown from "markdown-to-jsx";
import testMarkdown from "../markdown/test123.md?raw";

export default function BlogPost() {
  return (
    <article className="p-4 max-w-screen-xl mx-auto">
      <h2>Posts</h2>
      <Markdown>{testMarkdown}</Markdown>
    </article>
  );
}
