import Link from "next/link";
import { useTranslation } from "next-i18next";
import className from "utils/className";
import DarkModeButton from "./DarkModeButton";
import { FiX } from "react-icons/fi";
import { useEffect } from "react";

const NavItems = [{
  label: "Posts",
  path: "/posts",
}, {
  label: "About",
  path: "/about",
}]

function Nav({ toggleOn, onToggle }) {
  const { t } = useTranslation("common")

  useEffect(() => {
    if (toggleOn) {
      document.body.classList.add("disable-scroll");
      return;
    }
    document.body.classList.remove("disable-scroll");
  }, [toggleOn]);

  function handleNavItemClick() {
    onToggle && onToggle();
  }

  return (
    <div className={className(
      "fixed md:relative top-0 left-0 right-0 bottom-0 p-8 md:p-0 z-10 md:z-auto md:bg-transparent",
      !toggleOn && "hidden",
      toggleOn && "bg-default-bg dark:bg-default-bg-d",
      "md:flex flex-1 flex-col md:flex-row justify-start md:justify-between md:items-center"
    )}>
      <div className="flex flex-col md:flex-row mb-4 md:mb-0 gap-2">
        <button className="block md:hidden self-end text-default-fg dark:text-default-fg-d" onClick={handleNavItemClick}>
          <FiX size={24} />
        </button>
        {NavItems.map(({ label, path }) => {
          // const selected = path === pathname
          return (
            <p
              key={label}
              className={className(
                "text-purple dark:text-purple-d font-semibold text-2xl md:text-lg"
              )}
            >
              <Link href={path}>
                {t(path)}
              </Link>
            </p>
          );
        })}
      </div>
      <DarkModeButton />
    </div>
  )
}

export default Nav;
