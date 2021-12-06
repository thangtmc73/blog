import {
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";

import { FiSun, FiMoon } from "react-icons/fi";

function DarkModeButton() {
  const { colorMode, toggleColorMode } = useColorMode()
  const iconColor = useBreakpointValue({ base: "white", md: "gray" });
  return (
    <IconButton
      size={25}
      colorScheme={iconColor}
      onClick={toggleColorMode}
      icon={colorMode === "light" ? <FiSun size={ICON_SIZE} /> : <FiMoon size={ICON_SIZE} />}
    />
  )
}

const ICON_SIZE = 25;

export default DarkModeButton;
