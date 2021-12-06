import fs from "fs";
import path from "path";
import matter from "gray-matter";
import dayjs from "dayjs";

import Head from "next/head";
import ListPosts from "./components/ListPosts";
import Header from "components/Header";
import styles from "styles/Layout.module.scss";

export default function Posts({ posts }) {
  return (
    <div className={styles.page}>
      <Head>
        <title>Posts</title>
      </Head>
      <div className={styles.maxWidthWrapper}>
        <Header />
        <main>
          <ListPosts posts={posts} />
        </main>
      </div>
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
      date: dayjs(new Date(date)).format("DD/MM/YYYY"),
      category,
      tags,
      slug: filename.split('.')[0]
    }
  });
  return {
    props: {
      posts
    }
  }
}
