import {
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";

import { FiSun, FiMoon } from "react-icons/fi";

function DarkModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  const colorModeIconColor = useColorModeValue("black", "white");
  const iconColor = useBreakpointValue({ base: "white", md: colorModeIconColor });
  return (
    <IconButton
      size={25}
      colorScheme={iconColor}
      onClick={toggleColorMode}
      icon={colorMode === "light"
        ? <FiSun size={ICON_SIZE} color={iconColor} />
        : <FiMoon size={ICON_SIZE} color={iconColor}/>
      }
    />
  )
}

const ICON_SIZE = 25;

export default DarkModeButton;
