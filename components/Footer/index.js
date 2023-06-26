import Link from "next/link";
import SocialContacts from "./SocialContacts";

function Footer() {
  return (
    <footer className="flex flex-col w-full max-w-screen-lg mx-auto py-6 px-4">
      <div className="w-full flex flex-col md:flex-row justify-between">
        <div>
        <p className="text-center md:text-left text-2xl text-pink dark:text-pink-d font-bold">
          <Link href="/" passHref>Es kommst</Link>
        </p>
        <p className="text-md hidden md:block text-default-fg dark:text-default-fg-d">Cảm ơn bạn đã ghé qua</p>
        </div>
        <SocialContacts />
      </div>
      <p className="text-center md:text-left text-default-fg dark:text-default-fg-d">
        2021-present Thang Minh Tran
      </p>
    </footer >
  );
}

export default Footer;