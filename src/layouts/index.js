import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import styled from 'styled-components';

const BodyWrapper = styled.div`
  position : absolute;
  top: 10px;
  left: 10px;
  width: calc(100vw - 40px);
  min-height: calc(100vh - 20px);
  margin: 0 auto;
  padding: '0px 1.0875rem 1.45rem',
  padding-top: 1.45rem;
  border-radius: 10px;
  @media (max-width: 700px) {
    width: calc(100vw - 20px);
  }
`
const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <BodyWrapper>
      {children()}
    </BodyWrapper>
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
