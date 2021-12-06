import Head from "next/head";
import Header from "components/Header";
import styles from "styles/Layout.module.scss";
import className from "utils/className";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Posts</title>
      </Head>
      <Box
        backgroundColor="#f4f5f6"
      >
        <div className={className(styles.maxWidthWrapper)}>
          <Header />
        </div>
      </Box>
      <div className={className(styles.maxWidthWrapper, styles.mainContent)}>
      </div>
    </div>
  )
}
