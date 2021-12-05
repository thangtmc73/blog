import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import Header from "components/Header";
import styles from "styles/Layout.module.scss";

const PostPage = ({ title, date, mdxSource }) => {
  return (
    <div className={styles.page}>
      <Head>
        <title>Posts</title>
      </Head>
      <div className={styles.maxWidthWrapper}>
        <Header />
        <main className={styles.markdownContent}>
          <Text color="#212121" fontSize="3xl" fontWeight={"bold"}>{title}</Text>
          <MDXRemote {...mdxSource} />
        </main>
      </div>
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
    date,
    category = "",
    tags = []
  } = data;
  const mdxSource = await serialize(content);
  console.log("===mdxSource", mdxSource);

  return {
    props: {
      title,
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
