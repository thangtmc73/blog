import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import PostDetailHeader from "./components/PostDetailHeader";
import styles from "styles/PostDetail.module.scss";
import className from "utils/className";
import ThemeConfig from "theme/theme-config";
import {
  ThemeBox,
} from "components/ThemeComponent";
import MarkdownView from "components/MarkdownView";
import Discussion from "components/Discussion";

function PostPage({
  title,
  description,
  date,
  categories,
  tags,
  content,
}) {
  return (
    <div className={styles.page}>
      <Head>
        <title>Posts</title>
      </Head>
      <ThemeBox bgColorConfig={ThemeConfig.defaultHeaderBackgroundColor}>
        <div className={styles.maxWidthWrapper}>
          <PostDetailHeader
            title={title}
            description={description}
            date={date}
            categories={categories}
            tags={tags}
          />
        </div>
      </ThemeBox>
      <ThemeBox bgColorConfig={ThemeConfig.defaultContentBackgroundColor}>
        <div className={className(styles.maxWidthWrapper, styles.mainContent)}>
          <ThemeBox
            bgColorConfig={ThemeConfig.defaultContentBackgroundColor}
            className={className(styles.markdownContent)}
            pl={8}
            pr={8}
            pt={6}
          >
            <MarkdownView markdown={content} />
            <Discussion />
          </ThemeBox>
        </div>
      </ThemeBox>
    </div>
  )
}

const getStaticPaths = async ({ locales }) => {
  const files = fs.readdirSync(path.join("posts"));

  function generatePathWithLocale(locale) {
    return files.map(filename => ({
      params: {
        slug: filename.replace(".mdx", ""),
        locale: locale,
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

const getStaticProps = async ({ params: { slug }, locale }) => {
  const markdownWithMeta = fs.readFileSync(path.join("posts",
    slug + ".mdx"), "utf-8")

  const { data, content } = matter(markdownWithMeta);
  const {
    title,
    description,
    date,
    categories = "",
    tags = []
  } = data;

  return {
    props: {
      ...await serverSideTranslations(locale, ["common", "post"]),
      title,
      description,
      date,
      categories,
      tags,
      slug,
      content: content,
    }
  }
}

export { getStaticProps, getStaticPaths }
export default PostPage
