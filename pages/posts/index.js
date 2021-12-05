import Head from "next/head";
import PostCard from "./PostCard";
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
          {posts && posts.length > 0 ? (
            <ul>
              {posts.map((post, i) => (
                <PostCard post={post} key={i} />
              ))}
            </ul>
          ) : (
            <h2>No added posts</h2>
          )}
        </main>
      </div>
    </div>
  )
}
