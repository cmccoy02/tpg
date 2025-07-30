import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = styled.div`
  min-height: 100vh;
  background-color: #011111;
  color: white;
`;

const HeroSection = styled.section`
  position: relative;
  height: 60vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/assets/images/contact.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(1, 17, 17, 0.6);
  z-index: 2;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 4rem;
  font-weight: 400;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background-color: #011111;
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 3rem;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const ContactBlock = styled.div`
  text-align: center;
`;

const ContactLabel = styled.h3`
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  color: #66D210;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ContactText = styled.p`
  font-family: 'Roboto Slab', serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: white;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactLink = styled.a`
  font-family: 'Roboto Slab', serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: white;
  text-decoration: none;
  transition: color 0.2s;
  
  &:hover {
    color: #66D210;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Contact: React.FC = () => {
  return (
    <ContactPage>
      <Header />
      <HeroSection>
        <BackgroundImage />
        <Overlay />
        <HeroContent>
          <HeroTitle>Travel With Us</HeroTitle>
        </HeroContent>
      </HeroSection>
      <ContactSection>
        <ContactContainer>
          <SectionTitle>CONTACT US</SectionTitle>
          <ContactInfo>
            <ContactBlock>
              <ContactLabel>TRAVELER SUPPORT</ContactLabel>
              <ContactLink href="tel:833-301-0990">833-301-0990</ContactLink>
            </ContactBlock>
            <ContactBlock>
              <ContactLabel>ADDRESS</ContactLabel>
              <ContactText>Travelpass Group office:</ContactText>
              <ContactText>4700 W Daybreak Pkwy</ContactText>
              <ContactText>STE 100 N</ContactText>
              <ContactText>South Jordan, Utah 84009</ContactText>
              <ContactLink href="tel:801-562-4555">801-562-4555</ContactLink>
            </ContactBlock>
          </ContactInfo>
        </ContactContainer>
      </ContactSection>
      <Footer />
    </ContactPage>
  );
};

export default Contact;
