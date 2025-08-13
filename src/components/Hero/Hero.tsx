import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
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
  background-image: url('/assets/images/kauai.jpg.webp');
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
  background: rgba(1, 17, 17, 0.4);
  z-index: 2;
`;

const Content = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 800px;
  padding: 0 2rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ContentRectangle = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  width: 500px;
  height: auto;
  min-height: 250px;
  background-color: #042E30;
  opacity: 0.8;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 3;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 500px;
  }
  
  @media (max-width: 480px) {
    width: 95%;
    padding: 1.5rem;
  }
`;

const ContentHeading = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 1rem;
  color: white;
  text-align: left;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const ContentText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: white;
  margin-bottom: 2rem; 
  text-align: left;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
  }
`;

const AboutButton = styled.a`
  display: inline-block;
  width: 115px;
  height: 40px;
  border: 2px solid white;
  background: transparent;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Archivo Narrow', sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  cursor: pointer;
  align-self: flex-start;
  border-radius: 12px;
  margin-bottom: 0;
  
  &:hover {
    background: white;
    color: #042E30;
  }
  
  @media (max-width: 768px) {
    width: 100px;
    height: 35px;
    font-size: 0.8rem;
    align-self: center;
  }
`;

const Hero: React.FC = () => {
  const scrollToStory = () => {
    const storySection = document.getElementById('story');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection>
      <BackgroundImage />
      <Overlay />
      <Content>
        
      </Content>
      <ContentRectangle>
        <div>
          <ContentHeading>Where Travel Opens Doors</ContentHeading>
          <ContentText>
            Our belief that travel can open new doors and enrich lives drives everything we build. With four purpose-built platforms, Travelpass Group brings people closer to the moments that matter most to create a more interconnected and understanding world.
          </ContentText>
        </div>
        <AboutButton onClick={scrollToStory}>
          About Us
        </AboutButton>
      </ContentRectangle>
    </HeroSection>
  );
};

export default Hero;
