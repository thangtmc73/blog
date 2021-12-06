import Link from 'next/link'
import { Box, Text, useBreakpointValue } from "@chakra-ui/react"
import dayjs from "dayjs";
import styles from "./ListPosts.module.scss";

function Post({ title, description, date, category, slug }) {
  const minDateHeight = useBreakpointValue({ base: "auto", md: "100px" });
  const postPaddingTop = useBreakpointValue({ base: 0, md: 4 });
  const writtenDate = dayjs(date).format("DD/MM/YYYY");
  return (
    <>
      <Box
        bgColor={"white"}
        minH={minDateHeight}
        paddingTop={4}
        paddingLeft={4}
        paddingRight={4}
      >
        <Text color="#6a737d" fontSize="sm" fontWeight={"medium"}>{writtenDate}</Text>
      </Box>
      <Box
        bgColor={"white"}
        className={styles.postItemContent}
        minH={100}
        paddingTop={postPaddingTop}
        paddingLeft={4}
        paddingRight={4}
        paddingBottom={8}
      >
        <Text color="#6a737d" fontSize="sm" fontWeight={"medium"}>{category}</Text>
        <Text className={styles.title} color="#212121" fontSize="md" fontWeight={"bold"}>
          <Link href={'/posts/' + slug} passHref>
            {title}
          </Link>
        </Text>
        <Text color="#212121" fontSize="sm">
          {description}
        </Text>
      </Box>
    </>
  )
}

export default Post;
