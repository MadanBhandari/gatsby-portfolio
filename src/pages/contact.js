import React from 'react'
import styled from 'styled-components';

const PageBanner = styled.div`
  position : relative;
  background : #30DAC6;
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
      <h2>Contact</h2>
      <p>E : hello (at) madanbhandari.com</p>
    </PageContent>
  </PageBanner>
)

export default ContactPage
