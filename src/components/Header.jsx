import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-purple-800">
      <div className="relative max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/">
          <h1 className="text-3xl text-white font-bold p-4">Henrik Bakke</h1>
        </NavLink>

        <NavLink to="/guestbook">
          <p className="text-3xl text-white">Guestbook</p>
        </NavLink>
      </div>
    </header>
  );
}
