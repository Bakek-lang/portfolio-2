import BlogPost from "../components/BlogPost";
import testMarkdown from "../markdown/test123.md?raw";

export default function BlogPage() {
  return (
    <div className="text-white ">
      <h1 className="text-center">BLOG SITE</h1>
      <BlogPost content={testMarkdown} />
    </div>
  );
}
