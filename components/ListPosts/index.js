import { useBreakpointValue } from "@chakra-ui/react"
import { Grid, Box } from "@chakra-ui/react";
import Post from "./Post";
import { ThemeText, ThemeBox } from "components/ThemeComponent";
import styles from "./ListPosts.module.scss";

export default function ListPosts({ title, posts }) {
  const gridTemplateColumns = useBreakpointValue({ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" });
  return (
    <Box
      className={styles.listPosts}
      marginLeft={4}
      marginRight={4}
    >
      {title && (
        <ThemeText
          fontSize="2xl"
          fontWeight="bold"
          ml={6}
          mb={4}
        >
          {title}
        </ThemeText>
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
        <ThemeBox
          mt={12}
        >
          <ThemeText
            fontSize="2xl"
            textAlign="center"
          >
            {"Không có bài viết nào"}
          </ThemeText>
        </ThemeBox>
      )}
      
    </Box>
  )
}
