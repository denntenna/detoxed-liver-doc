import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        {/* © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a> */}
        <p
          style={{
            border: "1px yellow",
            background: "#33DFE5",
            padding: "0.4em",
            borderRadius: "0.4em",
          }}
        >
          <strong>ChatGPT Prompt:</strong> Can you rephrase the essay below in a
          way that it will not offend puritanical conservative irrational
          people? You can use the tone of a friendly middle school teacher. You
          cant use expletives or abuse anyone. It would be nice if you wrote it
          in short paragraphs so I could turn them into messages to share on a
          chat app like whatsapp."
        </p>
      </footer>
    </div>
  )
}

export default Layout
