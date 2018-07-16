import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'


import Header from '../components/header'

import 'font-awesome/scss/font-awesome.scss'

import './theme.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Gatsby + Bulma starter example' },
        { name: 'keywords', content: 'gatsby, bulma, javascript' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div className="section" style={{paddingTop:'1.5em'}}>
      {children()}
    </div>
    <footer className="footer has-text-right">
      <div className="container is-italic has-text-dark">
        <div>
          <p>Flubbex 2018 </p>
          <p>Made with Gatsby + Bulma CSS</p>
        </div>
      </div>
    </footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
