import dayjs from "dayjs";
import { Tag, HStack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { ThemeText } from "components/ThemeComponent";
import styles from "./PostDetailHeader.module.scss";
import ThemeConfig from "theme/theme-config";

function PostDetailHeader({ title, description, date, categories, tags }) {
  const { t } = useTranslation("post");
  return (
    <div className={styles.container}>
      <ThemeText
        colorConfig={ThemeConfig.primaryText}
        fontSize="3xl"
        fontWeight={"bold"}
      >
        {title}
      </ThemeText>
      {description && (
        <ThemeText
          colorConfig={ThemeConfig.subText}
          marginTop={3}
          fontSize="md"
        >
            {description}
        </ThemeText>
      )}
      <HStack mt={4} spacing={4}>
        {categories?.map(category => {
          return (
            <Tag key={category} variant={"solid"}>{category}</Tag>
          )
        })}
        {tags?.map(tag => {
          return (
            <Tag key={tag}>{tag}</Tag>
          )
        })}
      </HStack>
      <ThemeText
        colorConfig={ThemeConfig.primaryText}
        mt={3}
        fontSize="md"
      >
          {t("written_at")} <b>{dayjs(date).format("DD-MM-YYYY")}</b>
      </ThemeText>
    </div>
  )
}

export default PostDetailHeader
