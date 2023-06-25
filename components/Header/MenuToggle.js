import React from "react"
 import { FiMenu } from "react-icons/fi";

function MenuToggle({ onToggle }) {
  return (
    <button className="absolute block md:hidden right-8 top-8 text-default-fg dark:text-default-fg-d" onClick={onToggle}>
      <FiMenu size={ICON_SIZE} />
    </button>
  )
}

const ICON_SIZE = 24;

export default MenuToggle;
