import {
  Text,
  Box,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";

function ThemeComponent(Component) {
  function WrapperComponent({
    children,
    bgColorConfig,
    colorConfig,
    ...otherProps
  }) {
    const themeProps = {}
    themeProps.color = useColorModeValue(...(colorConfig || []));
    themeProps.bgColor = useColorModeValue(...(bgColorConfig || []));
    return (
    <Component
      {...themeProps}
      {...otherProps}
    >
      {children}
    </Component>
  )}
  WrapperComponent.displayName = "Theme" + (Component.displayName || "UnknownComponent");
  return WrapperComponent;
}

export const ThemeTag = ThemeComponent(Tag);
export const ThemeText = ThemeComponent(Text);
export const ThemeBox = ThemeComponent(Box);

