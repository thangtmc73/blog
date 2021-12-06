import dayjs from "dayjs";
import { Text, Tag, HStack } from "@chakra-ui/react";

function PostDetailHeader({ title, description, date, category, tags }) {
  return (
    <>
      <Text color="#212121" fontSize="3xl" fontWeight={"bold"}>{title}</Text>
      {description && <Text marginTop={3} color="#6a737d" fontSize="md">{description}</Text>}
      <HStack mt={4} spacing={4}>
        {category && <Tag variant={"solid"}>{category}</Tag>}
        {tags?.map(tag => {
          return (
            <Tag key={tag}>{tag}</Tag>
          )
        })}
      </HStack>
      <Text marginTop={3} fontSize="md">Written on <b>{dayjs(date).format("DD MMM YYYY")}</b></Text>
    </>
  )
}

export default PostDetailHeader
