import React from 'react'
import Link from 'gatsby-link'

import Hero from 'react-bulma-components/lib/components/hero'
import RoutedNavbar from './navbar'


const Header = (props={}) => (
  <Hero color="primary">
    <Hero.Body>
      <h1 className='is-size-1 title'>
        <Link to="/" > {props.siteTitle}  </Link>
      </h1>
    </Hero.Body>
    <Hero.Footer>
    
      <RoutedNavbar {...props} />
    
    </Hero.Footer>
  </Hero>
)

export default Header
