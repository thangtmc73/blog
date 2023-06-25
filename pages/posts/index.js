import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next";
import ListPostsLayout from "layout/ListPosts";

export default function Posts({ posts }) {
  const { t } = useTranslation("post");
  return (
    <ListPostsLayout
      title={t("all_posts")}
      data={posts}
    />
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
