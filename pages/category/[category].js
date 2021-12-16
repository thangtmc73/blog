import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next";
import Head from "next/head";
import ListPosts from "components/ListPosts";
import styles from "styles/ListDefault.module.scss";
import className from "utils/className";
import { ThemeBox } from "components/ThemeComponent";
import ThemeConfig from "theme/theme-config";

export default function SpecifiedCategory({ category, posts }) {
  const { t } = useTranslation("post");
  return (
    <div className={styles.page}>
      <Head>
        <title>{`Category "${category}"`}</title>
      </Head>
      <ThemeBox
        // height="100%"
        bgColorConfig={ThemeConfig.listContentBackgroundColor}
      >
        <div className={className(styles.maxWidthWrapper)}>
          <ListPosts
            title={category && `${t("category")} "${category}"`}
            posts={posts}
          />
        </div>
      </ThemeBox>
    </div>
  )
}

export const getStaticPaths = async ({ locales }) => {
  const files = fs.readdirSync(path.join("posts"));
  const mapCategories = {};
  files.forEach(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data } = matter(markdownWithMeta);
    const {
      categories = []
    } = data;
    categories.forEach(category => {
      mapCategories[category] = true;
    });
  });

  function generatePathWithLocale(locale) {
    return Object.keys(mapCategories).map(category => ({
      params: {
        category: category,
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

export const getStaticProps = async ({ params: { category }, locale }) => {
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
  }).filter(({ categories }) => {
    return categories.includes(category);
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
      category,
      posts
    }
  }
}
