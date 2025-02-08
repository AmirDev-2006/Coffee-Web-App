import "./Header.css";
import Navbar from "../Navbar/navbar";
import Home from "../Home/Home";
export default function Header() {
  return (
    <>
      <header className="w-screen max-w-full h-screen background md:mobile  bg-cover bg-no-repeat flex justify-center bg-center relative">
        {/* navigation bar */}
        <Navbar />
      </header>
    </>
  );
}
