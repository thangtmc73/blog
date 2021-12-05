import Link from "next/link";
import { useRouter } from "next/router"
import styles from "./Header.module.scss";

const NavItems = [{
  label: "Posts",
  path: "/posts",
}, {
  label: "About",
  path: "/about",
}]

function Nav() {
  const { pathname } = useRouter();
  return (
    <nav>
      <ul>
        {NavItems.map(({ label, path }) => {
          const className = path === pathname ? styles.selected : undefined;
          return (
            <li key={path} className={className}>
              <Link href={path} passHref>
              {label}
            </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}

export default Nav;
