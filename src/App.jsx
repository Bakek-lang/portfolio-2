import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import GuestBook from "./pages/GuestBook";
import BlogPage from "./pages/BlogPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/guestbook" element={<GuestBook />} />
          <Route path="/blog" element={<BlogPage />} />
        </Route>
      </Routes>
    </>
  );
}
