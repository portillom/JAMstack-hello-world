import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello everyone</h1>
    <p>My name is Michael Portillo.</p>
    <p>I'm excited to participate in JAMstack this year!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
