import React from "react"
import { Box } from "@chakra-ui/react"
 import { FiMenu, FiX } from "react-icons/fi";

function MenuToggle({ onToggle, toggleOn }) {
  return (
    <Box
      position={"absolute"}
      top={10}
      right={16}
      display={{ base: "block", md: "none" }}
      onClick={onToggle}
      zIndex={11}
    >
      {toggleOn ? <FiX color="white" size={ICON_SIZE} /> : <FiMenu size={ICON_SIZE} />}
    </Box>
  )
}

const ICON_SIZE = 24;

export default MenuToggle;
