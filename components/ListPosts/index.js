import { useBreakpointValue } from "@chakra-ui/react"
import { Grid } from "@chakra-ui/react";
import Post from "./Post";

export default function ListPosts({ title, posts }) {
  const gridTemplateColumns = useBreakpointValue({ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" });
  return (
    <div
      className="pt-16 ml-2 mr-2"
    >
      {title && (
        <p className="text-2xl font-bold ml-2 mb-4 text-cyan dark:text-cyan-d">
          {title}
        </p>
      )}
      {posts && posts.length > 0 ? (
        <Grid gridTemplateColumns={gridTemplateColumns} gap={4}>
          {posts.map((post, i) => {
            const { title, description, date, categories, tags, slug } = post;
            return (
              <Post
                title={title}
                description={description}
                date={date}
                categories={categories}
                slug={slug}
                tags={tags}
                key={i}
              />
            );
          })}
        </Grid>
      ) : (
        <div className="mt-3">
          <p className="text-2xl text-center">
            {"Không có bài viết nào"}
          </p>
        </div>
      )}
    </div>
  )
}
