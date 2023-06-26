import Head from "next/head";
import ListPosts from "components/ListPosts";

export default function ListPostsLayout({ title, data }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <div className="sticky h-20 top-0 left-0 right-0 bg-default-bg dark:bg-default-bg-d z-10" />
        <div className="w-full max-w-screen-lg mx-auto">
          <ListPosts
            title={title}
            posts={data}
          />
        </div>
      </div>
    </>
  )
}
