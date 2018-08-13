import React from 'react'
import styled from 'styled-components';

const PageBanner = styled.div`
  position : relative;
  background : #30DAC6;
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

const ContactPage = () => (
  <PageBanner>
    <PageContent>
      <h2>Contact</h2>
      <p>E : hello (at) madanbhandari.com</p>
    </PageContent>
  </PageBanner>
)

export default ContactPage
