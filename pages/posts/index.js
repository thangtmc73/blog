import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next";
import Head from "next/head";
import ListPosts from "./components/ListPosts";
import styles from "styles/ListDefault.module.scss";
import className from "utils/className";
import { ThemeBox } from "components/ThemeComponent";
import ThemeConfig from "theme/theme-config";

export default function Posts({ posts }) {
  const { t } = useTranslation("post");
  return (
    <div className={styles.page}>
      <Head>
        <title>Posts</title>
      </Head>
      <ThemeBox
        // height="100%"
        bgColorConfig={ThemeConfig.listContentBackgroundColor}
      >
        <div className={className(styles.maxWidthWrapper)}>
          <ListPosts
            title={t("all_posts")}
            posts={posts}
          />
        </div>
      </ThemeBox>
    </div>
  )
}

export const getStaticProps = async ({ locale }) => {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data } = matter(markdownWithMeta);
    const {
      title,
      description = "",
      date,
      categories = [],
      tags = []
    } = data;
    return {
      title,
      description,
      date,
      categories,
      tags,
      slug: filename.split('.')[0]
    }
  }).sort((A, B) => {
    const { date: aDate } = A;
    const { date: bDate } = B;
    const ADate = new Date(aDate);
    const BDate = new Date(bDate);
    return BDate - ADate;
  });
  return {
    props: {
      ...await serverSideTranslations(locale, ["common", "post"]),
      posts
    }
  }
}
