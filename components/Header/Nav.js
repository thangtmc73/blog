import Link from "next/link";
import { useRouter } from "next/router"
import styles from "./Header.module.scss";
import className from "utils/className";

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
          return (
            <li key={path} className={className(path === pathname && styles.selected)}>
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
