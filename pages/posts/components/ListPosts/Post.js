import { Link, useBreakpointValue } from "@chakra-ui/react"
import dayjs from "dayjs";
import styles from "./ListPosts.module.scss";
import { ThemeBox, ThemeText } from "components/ThemeComponent";
import ThemeConfig from "theme/theme-config";

function Post({ title, description, date, category, slug }) {
  const minDateHeight = useBreakpointValue({ base: "auto", md: "100px" });
  const postPaddingTop = useBreakpointValue({ base: 0, md: 4 });
  const writtenDate = dayjs(date).format("DD/MM/YYYY");
  return (
    <>
      <ThemeBox
        bgColorConfig={ThemeConfig.defaultContentBackgroundColor}
        minH={minDateHeight}
        paddingTop={4}
        paddingLeft={4}
        paddingRight={4}
      >
        <ThemeText
          colorConfig={ThemeConfig.subText}
          fontSize="sm"
          fontWeight={"medium"}
        >
          {writtenDate}
        </ThemeText>
      </ThemeBox>
      <ThemeBox
        bgColorConfig={ThemeConfig.defaultContentBackgroundColor}
        className={styles.postItemContent}
        minH={100}
        paddingTop={postPaddingTop}
        paddingLeft={4}
        paddingRight={4}
        paddingBottom={8}
      >
        <ThemeText
          colorConfig={ThemeConfig.subText}
          fontSize="sm"
          fontWeight={"medium"}
        >
          {category}
        </ThemeText>
        <ThemeText
          colorConfig={ThemeConfig.primaryText}
          className={styles.title}
          fontSize="md"
          fontWeight={"bold"}
        >
          <Link href={'/posts/' + slug}>
            {title}
          </Link>
        </ThemeText>
        <ThemeText
          colorConfig={ThemeConfig.subText}
          fontSize="sm"
          mt={1}
        >
          {description}
        </ThemeText>
      </ThemeBox>
    </>
  )
}

export default Post;
