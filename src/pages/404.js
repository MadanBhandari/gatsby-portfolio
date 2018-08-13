import React from 'react'
import styled from 'styled-components';

const PageBanner = styled.div`
  position : relative;
  background : #C51162;
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

const NotFoundPage = () => (
  <PageBanner>
    <PageContent>
      <h2>Oops !!</h2>
      <p>Looks like, we hit 404.</p>
    </PageContent>
  </PageBanner>
)

export default NotFoundPage
