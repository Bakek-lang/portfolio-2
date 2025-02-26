import Markdown from "markdown-to-jsx";
import CodeBlock from "./CodeBlock";

export default function BlogPost({ content }) {
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
        {content}
      </Markdown>
    </article>
  );
}
