import Head from "next/head";
import Header from "components/Header";
import styles from "styles/Layout.module.scss";
import className from "utils/className";
import { ThemeBox } from "components/ThemeComponent";
import ThemeConfig from "theme/theme-config";

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Posts</title>
      </Head>
      <Header />
      <div className={className(styles.maxWidthWrapper, styles.mainContent)}>
      </div>
    </div>
  )
}
