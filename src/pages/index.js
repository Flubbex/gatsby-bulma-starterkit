import React from 'react'
import Link from 'gatsby-link'

import loremIpsum from 'lorem-ipsum'

const IndexPage = () => (
  <div className="box">
    <h2 className="title is-size-2">{loremIpsum({count:1,units:'sentences'})}</h2>
    <hr style={{marginTop:0}}></hr>
    <div className="content container">
     { loremIpsum({count:5,units:'paragraphs'}).split('\n')
       .map((ippy,key)=> (
       <p key={key}>{ippy}</p>)
       ) }
    </div>
    
  </div>
)

export default IndexPage
