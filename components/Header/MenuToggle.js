import React from "react"
import { Box } from "@chakra-ui/react"
 import { FiMenu } from "react-icons/fi";

function MenuToggle({ onToggle }) {
  return (
    <Box
      position={"absolute"}
      top={10}
      right={16}
      display={{ base: "block", md: "none" }}
      onClick={onToggle}
    > 
      <FiMenu size={ICON_SIZE} />
    </Box>
  )
}

const ICON_SIZE = 24;

export default MenuToggle;
