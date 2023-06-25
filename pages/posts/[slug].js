import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import PostDetailHeader from "./components/PostDetailHeader";
import MarkdownView from "components/MarkdownView";

function PostPage({
  title,
  description,
  date,
  categories,
  tags,
  content,
}) {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <div className="bg-default-bg dark:bg-default-bg-d">
        <div className="max-w-screen-md	mx-auto px-4 md:px-2">
          <PostDetailHeader
            title={title}
            description={description}
            date={date}
            categories={categories}
            tags={tags}
          />
        </div>
      </div>
      <div className="bg-content-bg dark:bg-content-bg-d">
        <div className="max-w-screen-md mx-auto px-8 md:px-2 pt-1">
          <MarkdownView markdown={content} />
        </div>
      </div>
    </>
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
