import { useBreakpointValue } from "@chakra-ui/react"
import { Grid, Box } from "@chakra-ui/react";
import styles from "./ListPosts.module.scss";
import Post from "./Post";

export default function ListPosts({ posts }) {
  const gridTemplateColumns = useBreakpointValue({ base: "repeat(1, 1fr)", md: "200px 1fr" });
  return (
    <Box
      className={styles.listPosts}
      bgColor={"white"}
      marginLeft={4}
      marginRight={4}
    >
      {posts && posts.length > 0 ? (
        <Grid gridTemplateColumns={gridTemplateColumns}>
          {posts.map((post, i) => {
            const { title, description, date, categories, slug } = post;
            return (
              <Post
                title={title}
                description={description}
                date={date}
                categories={categories}
                slug={slug}
                key={i}
              />
            );
          })}
        </Grid>
      ) : (
        <h2>No added posts</h2>
      )}
    </Box>
  )
}
