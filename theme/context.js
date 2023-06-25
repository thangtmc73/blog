import { createContext } from "react"

const defaultValue = {
  colorMode: "light",
  toggleColorMode: () => {},
}

const ThemeContext = createContext(defaultValue)

export default ThemeContext