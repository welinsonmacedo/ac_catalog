import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #282c34;
  padding: 20px 0;
  text-align: center;
  color: white;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
`;

const FooterLinks = styled.div`
  margin-top: 10px;
`;

const FooterLink = styled.a`
  color: #61dafb;
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; {new Date().getFullYear()} WM Digital Solutions. All Rights Reserved.</FooterText>
      <FooterLinks>
      
        <FooterLink href="https://w.app/WfG0sN">Contact</FooterLink>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
