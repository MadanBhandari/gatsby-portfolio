import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  position : absolute;
  top: 10;
  left: 10;
  z-index: 999;
  min-width: calc(100% - 20px);
  background: transparent;
`
const HeaderContent = styled.div`
  position : relative;
  display : flex;
  align-items: center;
  justify-content : space-between;
  margin : 0 auto;
  padding : 1.45rem 1.0875rem;
`
const NavLinks = styled.ul`
  list-style : none;
  margin : 0;
  li{
    display : inline-block;
    padding: 0 10px;
    margin : 0;
  }
  a{
    text-decoration : none;
    color: #fff;
    &:hover{
      color : red;
    }
  }
  @media (max-width: 700px) {
    margin : 0 auto;
  }
`
const NavTitle = styled.div`
  font-size : 20px;
  @media (max-width: 700px) {
    display: none;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContent>
      <NavTitle>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </NavTitle>
      <NavLinks>
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/work">projects</Link></li>
        <li><Link to="/contact">contact</Link></li>
      </NavLinks>
    </HeaderContent>
  </HeaderWrapper>
)

export default Header
