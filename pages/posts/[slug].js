import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Header from "components/Header";
import PostDetailHeader from "./components/PostDetailHeader";
import styles from "styles/PostDetail.module.scss";
import className from "utils/className";
import ThemeConfig from "theme/theme-config";
import {
  ThemeBox,
} from "components/ThemeComponent";

function PostPage({
  title,
  description,
  date,
  category,
  tags,
  mdxSource,
}) {
  return (
    <div className={styles.page}>
      <Head>
        <title>Posts</title>
      </Head>
      <Header />
      <ThemeBox bgColorConfig={ThemeConfig.defaultHeaderBackgroundColor}>
        <div className={styles.maxWidthWrapper}>
          <PostDetailHeader
            title={title}
            description={description}
            date={date}
            category={category}
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
            <MDXRemote {...mdxSource} />
          </ThemeBox>
        </div>
      </ThemeBox>
    </div>
  )
}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace(".mdx", "")
    }
  }))

  return {
    paths,
    fallback: false
  }
}

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join("posts",
    slug + ".mdx"), "utf-8")

  const { data, content } = matter(markdownWithMeta);
  const {
    title,
    description,
    date,
    category = "",
    tags = []
  } = data;
  const mdxSource = await serialize(content);

  return {
    props: {
      title,
      description,
      date,
      category,
      tags,
      slug,
      mdxSource
    }
  }
}

export { getStaticProps, getStaticPaths }
export default PostPage
