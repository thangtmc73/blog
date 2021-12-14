import Link from "next/link";
import {
  Stack,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import ThemeConfig from "theme/theme-config";
import { FiGithub, FiMail } from "react-icons/fi";

function SocialContacts() {
  const iconColor = useColorModeValue(...ThemeConfig.primaryText);

  return (
    <Stack
      direction={"row"}
      pt={5}
      pb={5}
      justifyContent={{ base: "center", md: "flex-end" }}
      spacing={4}
    >
      <SocialItem
        href={"https://github.com/thangtmc73"}
        color={iconColor}
        Component={FiGithub}
      />
      <SocialItem
        href="mailto:thangtmc73@gmail.com"
        color={iconColor}
        Component={FiMail}
      />
      {/* <SocialItem
        color={iconColor}
        Component={FiCoffee}
      /> */}
    </Stack>
  )
}

function SocialItem({ Component, color, href = "/" }) {
  if (!Component) return null;
  return (
    <Link
      href={href}
      passHref
    >
    <Box
      padding={3}
      borderRadius={24}
    > 
      <Component color={color} size={24} />
    </Box>
    </Link>
  )
}

export default SocialContacts;
