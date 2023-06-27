// import { useState } from "react";
// import MarkdownView from "../../MarkdownView";
import CTAButton from "./CTAButton";

function CommentInput() {
  // const [value, setValue] = useState("");
  // function handleCommentChange(event) {
  //   setValue(event.target.value);
  // }

  return (
    <div className="flex flex-col items-end mt-8 rounded-sm p-1">
      {/* <Tabs variant="enclosed-colored" w="100%">
        <TabList className={styles.footer}>
          <Tab>Text</Tab>
          <Tab>Preview</Tab>
        </TabList>
        <TabPanels>
          <TabPanel padding={0}>
            <textarea
              className="w-full h-full"
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
      </Tabs> */}
      <CTAButton
        disabled={!value}
        text={"Bình luận với GitHub"}
      />
    </div>
  )
}

export default CommentInput;
