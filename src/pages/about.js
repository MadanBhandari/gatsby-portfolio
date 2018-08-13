import React from 'react'
import styled from 'styled-components';

const PageBanner = styled.div`
  position : relative;
  background : #3700B3;
  color : #fff;
  min-height: calc(100vh - 20px);
  width: calc(100vw - 40px);
  display: flex;
  align-items : flex-end;
  border-radius: 10px;
  @media (max-width: 700px) {
    width: calc(100vw - 20px);
  }
`;

const PageContent = styled.div`
  padding : 20px;
  width: 100%;
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
