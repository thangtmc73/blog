import {
  extendTheme,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"
import ThemeConfig from "theme/theme-config";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode(...ThemeConfig.defaultContentBackgroundColor)(props),
      },
    })
  }
});

export default theme;
