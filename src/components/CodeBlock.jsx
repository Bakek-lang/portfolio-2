import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  tomorrow,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock({ className, children, ...props }) {
  const language = className ? className.replace(/^(lang|language)-/, "") : "";
  console.log("this is language: ", language);
  console.log("this is classname: ", className);

  const style = language === "terminal" ? vscDarkPlus : tomorrow;
  return (
    <SyntaxHighlighter language={language} style={style} {...props}>
      {children}
    </SyntaxHighlighter>
  );
}
