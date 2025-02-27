import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock({ className, children, ...props }) {
  const language = className ? className.replace(/^(lang|language)-/, "") : "";

  return (
    <SyntaxHighlighter language={language} style={tomorrow} {...props}>
      {children}
    </SyntaxHighlighter>
  );
}
