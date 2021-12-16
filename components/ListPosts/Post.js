import {
  Link,
  HStack,
  Tag,
  TagLabel,
  TagLeftIcon,
} from "@chakra-ui/react";
 import { FiTag } from "react-icons/fi";
 import { useTranslation } from "next-i18next";
import { ThemeBox, ThemeText, ThemeTag } from "components/ThemeComponent";
import ThemeConfig from "theme/theme-config";

function Post({ title, description, categories, tags, slug }) {
  const { t } = useTranslation("post");
  return (
    <ThemeBox
      bgColorConfig={ThemeConfig.listContentItemBackgroundColor}
      minH={100}
      paddingTop={8}
      paddingLeft={{ base: 4, md: 8 }}
      paddingRight={{ base: 4, md: 8 }}
      paddingBottom={8}
      borderRadius={12}
    >
      <HStack>
        {categories?.map(category => (
          <ThemeTag
            key={category}
            bgColorConfig={ThemeConfig.postCategoryBackgroundColor}
            colorConfig={ThemeConfig.highlightText}
            fontSize="sm"
            fontWeight={"medium"}
          >
            <Link href={'/category/' + category}>
              {category}
            </Link>
          </ThemeTag>
        ))}
      </HStack>
      <ThemeText
        colorConfig={ThemeConfig.highlightText}
        fontSize="xl"
        fontWeight={"bold"}
        mt={2}
      >
        <Link href={'/posts/' + slug}>
          {title}
        </Link>
      </ThemeText>
        <ThemeText
          colorConfig={ThemeConfig.primaryText}
          fontSize="md"
          mt={3}
        >
          {description}
        </ThemeText>
        <ThemeText
          colorConfig={ThemeConfig.highlightText}
          fontSize="sm"
          fontWeight={"bold"}
          mt={3}
        >
          <Link href={'/posts/' + slug}>
            {t("see_more")}
          </Link>
        </ThemeText>
        <HStack mt={4} spacing={1}>
        {tags?.map(tag => {
          return (
            <Tag key={tag}borderRadius="full">
              <TagLeftIcon size={"sm"} as={FiTag} />
              <TagLabel>
                <Link href={'/tag/' + tag}>
                  {tag}
                </Link>
              </TagLabel>
            </Tag>
          )
        })}
      </HStack>
      </ThemeBox>
  )
}

export default Post;
