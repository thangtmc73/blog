import Head from "next/head";
import ListPosts from "components/ListPosts";

export default function ListPostsLayout({ title, data }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
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
