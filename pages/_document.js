import NextDocument, { Html, Head, Main, NextScript } from "next/document"

export default class Document extends NextDocument {
  render() {
    return (
   
      <Html lang="en">
        <Head />
        <body className="bg-default-background dark:bg-default-background-d">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}