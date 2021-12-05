import { Box, Text, useBreakpointValue } from "@chakra-ui/react"

function Post({ title, description, date, category }) {
  const minDateHeight = useBreakpointValue({ base: "auto", md: "100px" });
  const postPaddingTop = useBreakpointValue({ base: 0, md: 4 });
  return (
    <>
      <Box
        bgColor={"white"}
        minH={minDateHeight}
        paddingTop={4}
        paddingLeft={4}
        paddingRight={4}
      >
        <Text color="#6a737d" fontSize="sm" fontWeight={"medium"}>{date}</Text>
      </Box>
      <Box
        bgColor={"white"}
        minH={100}
        paddingTop={postPaddingTop}
        paddingLeft={4}
        paddingRight={4}
        paddingBottom={8}
      >
        <Text color="#6a737d" fontSize="sm" fontWeight={"medium"}>{category}</Text>
        <Text color="#212121" fontSize="md" fontWeight={"bold"}>{title}</Text>
        <Text color="#212121" fontSize="sm">{description}</Text>
      </Box>
    </>
  )
}

export default Post;
