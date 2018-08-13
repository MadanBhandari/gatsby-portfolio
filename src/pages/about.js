import React from 'react'
import styled from 'styled-components';

const PageBanner = styled.div`
  position : relative;
  background : yellow;
  color : #fff;
  min-height: calc(100vh - 20px);
  width: 100%;
  display: flex;
  align-items : flex-end;
`;

const PageContent = styled.div`
  position : relative;
  padding : 20px;
`

const AboutPage = () => (
  <PageBanner>
    <PageContent>
      <h2>Hello Internet</h2>
      <p>About Us Page.</p>
    </PageContent>
  </PageBanner>
)

export default AboutPage
