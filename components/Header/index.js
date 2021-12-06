import { useState } from "react";
import Link from "next/link";
import Nav from "./Nav";
import MenuToggle from "./MenuToggle";
import styles from "./Header.module.scss";

function Header() {
  const [toggleOn, setToggleOn] = useState(false);
  function handleMenuToggle() {
    setToggleOn(on => !on);
  }
  return (
    <header className={styles.header}>
      <h1 className={styles.name}>
        <Link href="/" passHref>Es kommst</Link>
      </h1>
      <Nav toggleOn={toggleOn} />
      <MenuToggle onToggle={handleMenuToggle} toggleOn={toggleOn}/>
    </header>
  );
}

export default Header;