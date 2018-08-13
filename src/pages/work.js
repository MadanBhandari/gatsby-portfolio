import React from 'react'
import styled from 'styled-components';

const PageBanner = styled.div`
  position : relative;
  background : #018786;
  color : #fff;
  min-height: calc(100vh - 20px);
  width: calc(100vw - 40px);
  display: flex;
  border-radius: 10px;
  align-items : flex-end;
  @media (max-width: 700px) {
    width: calc(100vw - 20px);
  }
`;

const PageContent = styled.div`
  padding : 20px;
`

const WorkPage = () => (
  <PageBanner>
    <PageContent>
      <h2>My Works</h2>
      <p>All of projects will be added here.</p>
    </PageContent>
  </PageBanner>
)

export default WorkPage
