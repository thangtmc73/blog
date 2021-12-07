import Link from "next/link";
import { useRouter } from "next/router"
import styles from "./Header.module.scss";
import className from "utils/className";
import {
  Stack,
  Text,
  Box,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import DarkModeButton from "./DarkModeButton";
import ThemeConfig from "theme/theme-config";
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
  const { pathname } = useRouter();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const colorModeTextColor = useColorModeValue(...ThemeConfig.primaryText);
  const textColor = useBreakpointValue({ base: "white", md: colorModeTextColor });

  useEffect(() => {
    if (isMobile && toggleOn) {
      document.body.classList.add("disable-scroll");
      return;
    }
    document.body.classList.remove("disable-scroll");
  }, [isMobile, toggleOn])

  if (isMobile && !toggleOn) {
    return null;
  }
  return (
    <Stack
      spacing={8}
      flex={1}
      justify={{ base: "flex-start", md: "space-between" }}
      direction={{ base: "column", md: "row" }}
      className={className(isMobile && styles.navMobile)}
      pl={{ base: 0, md: 10 }}
      pb={{ base: 12, md: 0}}
    >
      <Stack
        direction={{ base: "column", md: "row" }}
      >
        <Box
          position={"absolute"}
          top={10}
          right={16}
          display={{ base: "block", md: "none" }}
          onClick={onToggle}
        > 
          <FiX color="white" size={24} />
        </Box>
        {NavItems.map(({ label, path }) => {
          const selected = path === pathname
          return (
            <Text
              key={label}
              className={className(path === pathname && styles.selected)}
              color={textColor}
              padding={{ base: 0, md: 2 }}
              fontSize={{ base: "2xl", md: "lg"}}
              fontWeight={selected ? 700 : 600}
              borderBottom={selected && !isMobile && "2px solid #ff4081"}
            >
              <Link href={path}>
                {label}
              </Link>
            </Text>    
          );
        })}
      </Stack>
      <Stack
        direction={"row"}
      >
        <DarkModeButton />
      </Stack>
    </Stack>
  )
}

export default Nav;
