import Link from "next/link";
import {
  useBreakpointValue,
  Grid,
} from "@chakra-ui/react";
import SocialContacts from "./SocialContacts";
import styles from "./Footer.module.scss";
import { ThemeBox, ThemeText } from "components/ThemeComponent";
import ThemeConfig from "theme/theme-config";

function Footer() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <ThemeBox bgColorConfig={ThemeConfig.defaultFooterBackgroundColor}>
      <footer className={styles.footer}>
        <Grid
          w={"100%"}
          gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "1fr 300px"}}
        >
          <div>
            <ThemeText
              className={styles.name}
              textAlign={{ base: "center", md: "left"}}
            >
              <Link href="/" passHref>Es kommst</Link>
            </ThemeText>
            {!isMobile && <ThemeText fontSize="md">Cảm ơn bạn đã ghé qua</ThemeText>}
          </div>
          <SocialContacts />
          <ThemeText
            textAlign={{ base: "center", md: "left"}}
          >
            2021-present Thang Minh Tran
          </ThemeText>
        </Grid>
      </footer>
    </ThemeBox>
  );
}

export default Footer;