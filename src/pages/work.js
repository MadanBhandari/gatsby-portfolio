import React from 'react'
import styled from 'styled-components';

const PageBanner = styled.div`
  position : relative;
  background : #018786;
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

const WorkPage = () => (
  <PageBanner>
    <PageContent>
      <h2>My Works</h2>
      <p>All of projects will be added here.</p>
    </PageContent>
  </PageBanner>
)

export default WorkPage
