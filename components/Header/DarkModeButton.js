import {
  useBreakpointValue,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";

import { FiSun, FiMoon } from "react-icons/fi";
import { useContext } from "react";
import ThemeContext from "theme/context";

function DarkModeButton() {
  const { colorMode, toggleColorMode } = useContext(ThemeContext);
  const colorModeIconColor = useColorModeValue("black", "white");
  const iconColor = useBreakpointValue({ base: "white", md: colorModeIconColor });
  return (
    <button onClick={toggleColorMode}>
      {colorMode === "light"
        ? <FiSun size={ICON_SIZE} color={"black"} />
        : <FiMoon size={ICON_SIZE} color={"white"} />
      }
    </button>
  )
}

const ICON_SIZE = 25;

export default DarkModeButton;
