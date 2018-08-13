import React from 'react'
import styled from 'styled-components';

const PageBanner = styled.div`
  position : relative;
  background : green;
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

const ContactPage = () => (
  <PageBanner>
    <PageContent>
      <h2>Hello Internet</h2>
      <p>Contact Us Page.</p>
    </PageContent>
  </PageBanner>
)

export default ContactPage
