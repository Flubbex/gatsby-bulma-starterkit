import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className='hero is-primary'>
    <div className='hero-body'>
      <h1 className='is-size-1'>
        <Link to="/" >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
