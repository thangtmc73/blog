import Link from "next/link";
import {
  useBreakpointValue,
  Grid,
} from "@chakra-ui/react";
import SocialContacts from "./SocialContacts";

function Footer() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <footer className="flex w-full max-w-screen-lg mx-auto py-6 px-4">
      <Grid
        w={"100%"}
        gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "1fr 300px" }}
      >
        <div>
          <p className="text-center md:text-left text-2xl text-pink dark:text-pink-d font-bold">
            <Link href="/" passHref>Es kommst</Link>
          </p>
          {!isMobile && <p className="text-md">Cảm ơn bạn đã ghé qua</p>}
        </div>
        <SocialContacts />
        <p className="text-center md:text-left">
          2021-present Thang Minh Tran
        </p>
      </Grid>
    </footer>
  );
}

export default Footer;