import { MDXRemote } from "next-mdx-remote";
import { useColorMode } from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styles from "./MarkdownView.module.scss";
import className from "utils/className";

const CodeBlock = {
  code({ inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "")
    return !inline && match ? (
      <SyntaxHighlighter 
        style={dracula}
        showLineNumbers={true}
        language={match[1]} 
        PreTag="div" {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }
}

function MarkdownView({ mdxSource }) {
  const { colorMode } = useColorMode();
  if (!mdxSource) {
    return null;
  }
  return (
    <div className={className(styles.markdownView, colorMode === "dark"  && styles.darkMode)}>
      <MDXRemote {...mdxSource} components={CodeBlock} />
    </div>
  );
}

export default MarkdownView;
