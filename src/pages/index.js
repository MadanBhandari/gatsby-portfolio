import React from 'react'
import styled from 'styled-components';

const PageBanner = styled.div`
  position : relative;
  background : #6200EE;
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
`

const IndexPage = () => (
  <PageBanner>
    <PageContent>
      <h2>Hello Internet</h2>
      <p>I am Madan Bhandari, Frontend Developer from New Delhi, India.</p>
    </PageContent>
  </PageBanner>
)

export default IndexPage