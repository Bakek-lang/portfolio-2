import Markdown from "markdown-to-jsx";
import testMarkdown from "../markdown/test123.md?raw";
import CodeBlock from "./CodeBlock";

export default function BlogPost() {
  return (
    <article className="prose prose-invert   p-4 max-w-screen-xl mx-auto ">
      <h2>Posts</h2>
      <Markdown
        options={{
          overrides: {
            code: {
              component: CodeBlock,
            },
          },
        }}
      >
        {testMarkdown}
      </Markdown>
    </article>
  );
}
