import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula, oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useContext } from "react";
import ThemeContext from "theme/context";
import useHasMounted from "hooks/useHasMounted";

const CodeBlock = (theme) => ({
  h1: (props) => <h1 className="text-green dark:text-green-d my-2 text-3xl font-bold" {...props} />,
  h2: (props) => <h2 className="text-purple dark:text-purple-d my-2 text-2xl font-bold" {...props} />,
  h3: (props) => <h3 className="text-orange dark:text-orange-d my-2 text-2xl font-semibold" {...props} />,
  h4: (props) => <h4 className="text-cyan dark:text-cyan-d my-2 text-xl font-semibold" {...props} />,
  h5: (props) => <h5 className="text-yellow dark:text-yellow-d my-2 text-xl" {...props} />,
  h6: (props) => <h6 className="text-yellow dark:text-yellow-d my-2" {...props} />,
  p: (props) => <p className="text-default-fg dark:text-default-fg-d text-md my-2" {...props} />,
  // eslint-disable-next-line @next/next/no-img-element
  img: (props) => <img className="mx-auto" alt="img" {...props} />,
  a: (props) => <a className="p-1 text-red dark:text-red-d hover:border-b-2 red:border-b-purple dark:hover:border-b-purple-d" {...props} />,
  code: ({ inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || "")
    return !inline && match ? (
      <SyntaxHighlighter
        style={theme === "light" ? oneLight : dracula}
        className="w-full overflow-x-auto my-2"
        showLineNumbers={true}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }
})

function MarkdownView({ markdown }) {
  const { colorMode } = useContext(ThemeContext);
  const hasMounted = useHasMounted();
  if (!markdown || !hasMounted) {
    return null;
  }
  return (
    <div className="text-default-fg dark:text-default-fg-d px-1 py-4">
      <ReactMarkdown key={colorMode} components={CodeBlock(colorMode)}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

export default MarkdownView;
