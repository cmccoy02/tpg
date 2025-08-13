import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #011111;
  color: #FFFAF3;
  padding: 3rem 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
  }
`;

const Logo = styled.img`
  height: 60px;
  width: auto;
  margin-right: 2.5rem;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1.5rem;
  }
`;

const FooterSections = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    align-items: center;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const SectionTitle = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const BrandLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const BrandLink = styled.a<{ hovercolor: string }>`
  color: #FFFAF3;
  text-decoration: none;
  font-size: 1rem;
  font-family: 'Archivo Narrow', sans-serif;
  font-weight: 400;
  transition: color 0.2s;
  text-align: left;
  &:hover {
    color: ${props => props.hovercolor};
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const LinkedInLogo = styled.img`
  height: 32px;
  width: 32px;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  cursor: pointer;
  filter: brightness(0) invert(1);
  transition: filter 0.2s;
  
`;

const ContactLink = styled.a`
  color: #FFFAF3;
  text-decoration: none;
  font-size: 1rem;
  font-family: 'Archivo Narrow', sans-serif;
  font-weight: 400;
  transition: color 0.2s;
  text-align: left;
  margin-top: 0.2rem;
  &:hover {
    color: #66D210;
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Logo src="/assets/logos/TPG_Beach_hero.png" alt="TPG Logo" />
      <FooterSections>
        <Section>
          <SectionTitle>Brands</SectionTitle>
          <BrandLinks>
            <BrandLink href="https://travelpass.com/" target="_blank" rel="noopener noreferrer" hovercolor="#66D210">Travelpass</BrandLink>
            <BrandLink href="https://www.nitecrawler.com/" target="_blank" rel="noopener noreferrer" hovercolor="#734CE7">Nitecrawler</BrandLink>
            <BrandLink href="https://www.reservationcounter.com/" target="_blank" rel="noopener noreferrer" hovercolor="#FDA416">Reservation Counter</BrandLink>
            <BrandLink href="https://www.reservationdesk.com/" target="_blank" rel="noopener noreferrer" hovercolor="#00BBD7">Reservation Desk</BrandLink>
          </BrandLinks>
        </Section>
        <Section>
          <SectionTitle>Careers</SectionTitle>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" >
            <LinkedInLogo src="/assets/logos/linkedin.svg" alt="LinkedIn" />
          </a>
        </Section>
        <Section>
          <SectionTitle>Contact</SectionTitle>
          <ContactLink href="/pages/contact" >Contact Us</ContactLink>
        </Section>
      </FooterSections>
    </FooterContainer>
  );
};

export default Footer;