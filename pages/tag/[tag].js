import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next";
import ListPostsLayout from "layout/ListPosts";

export default function Posts({ tag, posts }) {
  const { t } = useTranslation("post");
  return (
    <ListPostsLayout
      title={`${t("tag")} "${tag}"`}
      data={posts}
    />
  )
}

export const getStaticPaths = async ({ locales }) => {
  const files = fs.readdirSync(path.join("posts"));
  const mapTags = {};
  files.forEach(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data } = matter(markdownWithMeta);
    const {
      tags = []
    } = data;
    tags.forEach(tag => {
      mapTags[tag] = true;
    });
  });

  function generatePathWithLocale(locale) {
    return Object.keys(mapTags).map(tag => ({
      params: {
        tag: tag,
        locale,
      }
    }));
  }

  const paths = locales?.reduce((oldPaths, locale) => {
    return [
      ...oldPaths,
      ...generatePathWithLocale(locale),
    ]
  }, []);

  return {
    paths: paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params: { tag }, locale }) => {
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
  }).filter(({ tags }) => {
    return tags.includes(tag);
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
      tag,
      posts
    }
  }
}
