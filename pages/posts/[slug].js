import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Header from "components/Header";
import PostDetailHeader from "./components/PostDetailHeader";
import styles from "styles/Layout.module.scss";
import { Box } from "@chakra-ui/react";
import className from "utils/className";

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
      <Box backgroundColor="#f4f5f6">
        <div className={styles.maxWidthWrapper}>
          <Header />
          <PostDetailHeader
            title={title}
            description={description}
            date={date}
            category={category}
            tags={tags}
          />
        </div>
      </Box>
      <Box backgroundColor="white">
        <div className={className(styles.maxWidthWrapper, styles.mainContent)}>
          <Box
            backgroundColor={"white"}
            pl={8}
            pr={8}
            pt={6}
          >
            <MDXRemote {...mdxSource} />
          </Box>
      </div>
      </Box>
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
