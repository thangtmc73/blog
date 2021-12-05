import Post from "./Post";
import { useBreakpointValue } from '@chakra-ui/react'
import { Grid, Box } from '@chakra-ui/react'
import styles from "styles/Layout.module.scss";

export default function ListPosts({ posts }) {
  const gridTemplateColumns = useBreakpointValue({ base: "repeat(1, 1fr)", md: "200px 1fr" })
  return (
    <Box
      bgColor={"white"}
      marginLeft={8}
      marginRight={8}
    >
      {posts && posts.length > 0 ? (
        <Grid gridTemplateColumns={gridTemplateColumns}>
          {posts.map((post, i) => {
            const { title, description, date, category } = post;
            return (
              <Post
                title={title}
                description={description}
                date={date}
                category={category}
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
