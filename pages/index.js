import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import styles from "styles/Layout.module.scss";
import className from "utils/className";

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Home</title>
      </Head>
      <div className={className(styles.maxWidthWrapper, styles.mainContent)}>
      </div>
    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ["common"]),
  },
});
