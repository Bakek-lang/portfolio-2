/* import htmlVim from "../markdown/html_vim.md?raw";
import vscodeVim from "../markdown/vscode_vim.md?raw"; */
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
  /*   {
    id: "html-vim",
    title: "HTML VIM Blogpost",
    content: htmlVim,
    created: "Jun 25, 2024",
  },
  {
    id: "vscode-vim",
    title: "Introduction to VSCode VIM",
    content: vscodeVim,
    created: "Jun 23, 2024",
  }, */
];

export default blogPosts;
