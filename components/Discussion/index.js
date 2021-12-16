import CommentInput from "./CommentInput";
import { ThemeText } from "../ThemeComponent";
import ThemeConfig from "theme/theme-config";
import styles from "./Discussion.module.scss";

function Discussion() {
  return (
    <div className={styles.container}>
      <ThemeText
        colorConfig={ThemeConfig.primaryText}
        fontSize={"2xl"}
        fontWeight="bold"
      >
        Thảo luận
      </ThemeText>
      <CommentInput />
      <div>
        
      </div>
    </div>
  )  
}

export default Discussion;
