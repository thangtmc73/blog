import { FiSun, FiMoon } from "react-icons/fi";
import { useContext } from "react";
import ThemeContext from "theme/context";

function DarkModeButton() {
  const { colorMode, toggleColorMode } = useContext(ThemeContext);
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
