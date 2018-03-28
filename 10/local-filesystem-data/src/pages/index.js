import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Home</h1>
    <p>Choose an article category</p>
    <ul>
      <li>
        <Link to="/global/">Global</Link>
      </li>
      <li>
        <Link to="/local/">Local</Link>
      </li>
      <li>
        <Link to="/sports/">Sports</Link>
      </li>
    </ul>
  </div>
)

export default IndexPage
