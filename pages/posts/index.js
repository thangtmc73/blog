import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Head from "next/head";
import ListPosts from "./components/ListPosts";
import Header from "components/Header";
import styles from "styles/Layout.module.scss";
import className from "utils/className";
import { ThemeBox } from "components/ThemeComponent";
import ThemeConfig from "theme/theme-config";

export default function Posts({ posts }) {
  return (
    <div className={styles.page}>
      <Head>
        <title>Posts</title>
      </Head>
      <ThemeBox
        bgColorConfig={ThemeConfig.defaultHeaderBackgroundColor}
      >
        <div className={className(styles.maxWidthWrapper)}>
          <Header />
        </div>
      </ThemeBox>
      <ThemeBox
        bgColorConfig={ThemeConfig.defaultContentBackgroundColor}
      >
        <div className={className(styles.maxWidthWrapper)}>
          <ListPosts posts={posts} />
        </div>
      </ThemeBox>
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data } = matter(markdownWithMeta);
    const {
      title,
      description = "",
      date,
      category = "",
      tags = []
    } = data;
    return {
      title,
      description,
      date,
      category,
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
      posts
    }
  }
}
