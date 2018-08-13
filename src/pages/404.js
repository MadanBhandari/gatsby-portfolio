import React from 'react'
import styled from 'styled-components';

const PageBanner = styled.div`
  position : relative;
  background : #C51162;
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

const NotFoundPage = () => (
  <PageBanner>
    <PageContent>
      <h2>Oops !!</h2>
      <p>Looks like, we hit 404.</p>
    </PageContent>
  </PageBanner>
)

export default NotFoundPage
