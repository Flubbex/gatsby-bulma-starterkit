import React from 'react'
import Link from 'gatsby-link'
import Navbar from 'react-bulma-components/lib/components/navbar'

const RoutedNavbar = (props) => (
  <Navbar>
    <Navbar.Brand>
      <Link to='/' classname='navbar-item'>{props.siteTitle}</Link>
      <Navbar.Burger/>
    </Navbar.Brand>
    <Navbar.Menu>
      <Navbar.Container>
        <Navbar.Item dropdown hoverable>
          <Link to="/about" className="navbar-item">About</Link>
        </Navbar.Item> 
      </Navbar.Container>
    </Navbar.Menu>
  </Navbar>
)

export default RoutedNavbar
