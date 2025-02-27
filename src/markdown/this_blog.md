# Building a Blog Section for My Portfolio: A Step-by-Step guide

In this post, I’ll walk you through how I built a simple, yet effective blog section for my portfolio using React, Markdown, and Tailwind CSS. Whether you’re looking to create your own blog or just curious about my process, this guide will cover everything from setting up the blog overview to rendering Markdown with syntax-highlighted code blocks.

## 1. Why a Blog Section?

I wanted a lightweight way to share ideas and tutorials without needing a full-blown static site generator. Instead, I used Markdown files for content and rendered them directly in React. This approach gives me the flexibility to quickly write and update posts while keeping the site fast and simple.

## 2. Tools and Technologies

Here`s what I used:

- **React** for building the UI
- **React Router** to manage navigation between the blog overview and individual posts.
- **Markdown-to-JSX** to convert Markdown files into React components.
- **React-Syntax-Highlighter** to style code blocks in my posts.
- **TailwindCSS** (with the Typography plugin) to style the content beautifully.
- **Vite** as my build tool (which means a few things to remember about asset paths).

## 3. Setting up the Blog Overview

I started by creating a blog overview page that lists all my posts. I kept an array of post metadata (like ID, title, and created) in a separate file. Then, I mapped over that array to create a bullet‑point list of links.

```jsx
// BlogOverview.jsx
import { Link } from "react-router-dom";
import blogPosts from "../js/blogPosts";

export default function BlogOverview() {
  return (
    <div className="text-white p-4 flex flex-col items-center">
      <h1 className="text-center text-3xl font-bold mb-8">BLOG</h1>
      <ul className="list-disc ">
        {blogPosts.map((post) => (
          <li key={post.id}>
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
```

Each link routes to a URL like "/blog/test-post", where "test-post" is the ID of the post.

## The Array of Blog Posts

```js
import myWorkflow from "../markdown/my_workflow.md?raw";
import createBlog from "../markdown/this_blog.md?raw";

const blogPosts = [
  {
    id: "my-workflow",
    title: "My workflow",
    content: myWorkflow,
    created: "Feb 26, 2025",
  },
  {
    id: "this-blog",
    title: "Create a Blog",
    content: createBlog,
    created: "Feb 27, 2025",
  },
];

export default blogPosts;
```

This array stores blog post data, with each post represented as an object containing an **id**, **title**, **content**, and **created** date. The content is imported from Markdown files, using **?raw** to ensure the files are treated as plain text strings. This allows the blog overview to display metadata while the content is used for the blog post detail page.

## 4. Creating the Blog Post Detail Page

For the individual blog post page, I used React Router’s **useParams** hook to grab the ID from the URL. Then, I looked up the matching post in my array. I used **Markdown-to-JSX** to render the Markdown content and added a custom override to render code blocks with React-Syntax-Highlighter.

```jsx
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
```

## The Custom Code Block Component

To handle code blocks, I created a CodeBlock component that uses **React-Syntax-Highlighter**. This component extracts the language from the code block’s class name (for example, language-jsx becomes jsx) and applies a theme.

```jsx
// CodeBlock.jsx
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
```
