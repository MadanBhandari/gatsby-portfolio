import React from 'react'
import styled from 'styled-components';

const PageBanner = styled.div`
  position : relative;
  background : #3700B3;
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
      <h2>About Me</h2>
      <p>This page is all about me.</p>
    </PageContent>
  </PageBanner>
)

export default AboutPage
