import { useState } from "react";
import {
  Textarea,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import styles from "../Discussion.module.scss";
import { ThemeBox } from "../../ThemeComponent";
import MarkdownView from "../../MarkdownView";
import ThemeConfig from "theme/theme-config";
import CTAButton from "./CTAButton";

function CommentInput() {
  const [value, setValue] = useState("");
  function handleCommentChange(event) {
    setValue(event.target.value);
  }

  return (
    <ThemeBox
      className={styles.commentInput}
      bgColorConfig={ThemeConfig.defaultHeaderBackgroundColor}
      borderRadius={4}
      pb={3}
      pl={2}
      pr={2}
    >
      <Tabs variant="enclosed-colored" w="100%">
        <TabList className={styles.footer}>
          <Tab>Text</Tab>
          <Tab>Preview</Tab>
        </TabList>
        <TabPanels>
          <TabPanel padding={0}>
            <Textarea
              value={value}
              placeholder="Thêm vào thảo luận"
              size="md"
              onChange={handleCommentChange}
            />
          </TabPanel>
          <TabPanel
            padding={0}
          >
            <div style={{ minHeight: "80px"}}>
              {value && <MarkdownView markdown={value} />}
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <CTAButton
        disabled={!value}
        text={"Bình luận với GitHub"}
      />
    </ThemeBox>
  )
}

export default CommentInput;
