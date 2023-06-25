import Link from "next/link";
import { useTranslation } from "next-i18next";
import className from "utils/className";
import {
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import DarkModeButton from "./DarkModeButton";
// import LanguageButton from "./LanguageButton";
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
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    if (isMobile && toggleOn) {
      document.body.classList.add("disable-scroll");
      return;
    }
    document.body.classList.remove("disable-scroll");
  }, [isMobile, toggleOn]);

  function handleNavItemClick() {
    onToggle && onToggle();
  }

  if (isMobile && !toggleOn) {
    return null;
  }
  return (
    <div className="fixed md:relative top-0 left-0 right-0 bottom-0 p-16 md:p-0 z-10 md:z-auto bg-gray-700 md:bg-inherit flex flex-1 flex-col md:flex-row justify-start md:justify-between md:items-center">
      <div className="flex flex-col md:flex-row">
        <button className="block md:hidden self-end" onClick={handleNavItemClick}>
          <FiX color="white" size={24} />
        </button>
        {NavItems.map(({ label, path }) => {
          // const selected = path === pathname
          return (
            <Text
              key={label}
              className={className(
                "text-purple dark:text-purple-d font-semibold mx-2"
              )}
            >
              <Link href={path}>
                {t(path)}
              </Link>
            </Text>
          );
        })}

      </div>
      <div className="z-10">
        <DarkModeButton />

        {/* <LanguageButton /> */}
      </div>
    </div>
  )
}

export default Nav;
