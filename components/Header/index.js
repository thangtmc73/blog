import { useState } from "react";
import Link from "next/link";
import Nav from "./Nav";
import MenuToggle from "./MenuToggle";

function Header() {
  const [toggleOn, setToggleOn] = useState(false);
  function handleMenuToggle() {
    setToggleOn(on => !on);
  }
  return (
    <div className="top-0 left-0 right-0 z-30 flex items-center w-full max-w-screen-lg mx-auto sticky py-4 px-4">
      <h1 className="text-3xl font-bold mr-6 text-pink dark:text-pink-d">
        <Link href="/" passHref>Es kommst</Link>
      </h1>
      <Nav
        toggleOn={toggleOn}
        onToggle={handleMenuToggle}
      />
      <MenuToggle onToggle={handleMenuToggle} toggleOn={toggleOn} />
    </div>
  );
}

export default Header;