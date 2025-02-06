import "./Header.css";
import Navbar from "../Navbar/navbar";
export default function Header() {
  return (
    <>
      <header className="w-screen h-screen background md:mobile  bg-cover bg-no-repeat flex justify-center bg-center fixed">
        {/* navigation bar */}
        <Navbar/>
        
              </header>
    </>
  );
}
