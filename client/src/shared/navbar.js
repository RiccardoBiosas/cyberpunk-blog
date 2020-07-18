import React from 'react'

import StyledNavbar from './navbar.styles'
import StyledLink from './link.styles'

const Navbar = () => {
  return (
    <StyledNavbar>
      <div>logo</div>

      <div>
        <StyledLink>blog</StyledLink>
        <StyledLink>about</StyledLink>
      </div>
    </StyledNavbar>
  )
}


export default Navbar