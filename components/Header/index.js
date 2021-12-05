import Link from "next/link";
import Nav from "./Nav";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <h2 className={styles.name}>Andy Tran</h2>
      </Link>
      <Nav />
    </header>
  );
}

export default Header;