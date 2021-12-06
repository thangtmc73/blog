import Link from "next/link";
import { useRouter } from "next/router"
import styles from "./Header.module.scss";
import className from "utils/className";
import {
  Stack,
  Text,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
 import { FiSun } from "react-icons/fi";

const NavItems = [{
  label: "Posts",
  path: "/posts",
}, {
  label: "About",
  path: "/about",
}]

function Nav({ toggleOn }) {
  const { pathname } = useRouter();
  const toggleVisible = useBreakpointValue({ base: true, md: false });
  const iconColor = useBreakpointValue({ base: "white", md: "gray" });
  const textColor = useBreakpointValue({ base: "white", md: "#212121" });

  if (toggleVisible && !toggleOn) {
    return null;
  }
  return (
    <Stack
      spacing={8}
      flex={1}
      justify={{ base: "flex-start", md: "space-between" }}
      direction={{ base: "column", md: "row" }}
      className={className(toggleVisible && styles.navMobile)}
      pl={{ base: 0, md: 10 }}
      pb={{ base: 12, md: 0}}
    >
      <Stack
        direction={{ base: "column", md: "row" }}
      >
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
              borderBottom={selected && !toggleVisible && "2px solid #ff4081"}
            >
              <Link  href={path} passHref>
                {label}
              </Link>
            </Text>    
          );
        })}
      </Stack>
      <Stack
        direction={"row"}
      >
        <IconButton
          size={25}
          colorScheme={iconColor}
          icon={<FiSun size={25} />}
        />
      </Stack>
    </Stack>
  )
}

export default Nav;
