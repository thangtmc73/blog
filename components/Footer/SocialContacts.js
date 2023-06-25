import Link from "next/link";
import { FiGithub, FiMail } from "react-icons/fi";

function SocialContacts() {
  return (
    <div className="flex py-1 gap-2 justify-center md:justify-end">
      <SocialItem
        href={"https://github.com/thangtmc73"}
        Component={FiGithub}
      />
      <SocialItem
        href="mailto:thangtmc73@gmail.com"
        Component={FiMail}
      />
      {/* <SocialItem
        color={iconColor}
        Component={FiCoffee}
      /> */}
    </div>
  )
}

function SocialItem({ Component, href = "/" }) {
  if (!Component) return null;
  return (
    <Link
      href={href}
      passHref
    >
      <div className="rounded-full p-3 text-default-fg dark:text-default-fg-d">
        <Component size={24} />
      </div>
    </Link>
  )
}

export default SocialContacts;
