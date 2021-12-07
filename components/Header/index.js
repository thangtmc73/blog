import { useState } from "react";
import Link from "next/link";
import Nav from "./Nav";
import MenuToggle from "./MenuToggle";
import styles from "./Header.module.scss";
import { ThemeBox } from "components/ThemeComponent";
import ThemeConfig from "theme/theme-config";

function Header() {
  const [toggleOn, setToggleOn] = useState(false);
  function handleMenuToggle() {
    setToggleOn(on => !on);
  }
  return (
    <ThemeBox bgColorConfig={ThemeConfig.defaultHeaderBackgroundColor}>
      <header className={styles.header}>
        <h1 className={styles.name}>
          <Link href="/" passHref>Es kommst</Link>
        </h1>
        <Nav toggleOn={toggleOn} />
        <MenuToggle onToggle={handleMenuToggle} toggleOn={toggleOn}/>
      </header>
    </ThemeBox>
  );
}

export default Header;