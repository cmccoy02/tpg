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

const Logo = styled.img`
  position: absolute;
  top: 2rem;
  left: 2rem;
  height: 60px;
  width: auto;
  z-index: 3;
  
  @media (max-width: 768px) {
    height: 40px;
    top: 1rem;
    left: 1rem;
  }
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
  height: 250px;
  background-color: #042E30;
  opacity: 0.7;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 3;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    min-height: 200px;
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
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
  }
`;

const ContentText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: white;
  margin-bottom: 1.5rem;
  text-align: left;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
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
  margin-bottom: 5px;
  
  &:hover {
    background: white;
    color: #042E30;
  }
  
  @media (max-width: 768px) {
    width: 100px;
    height: 35px;
    font-size: 0.8rem;
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
      <Logo src="/assets/logos/TPG_Beach_hero.png" alt="TPG Logo" />
      <Content>
        
      </Content>
      <ContentRectangle>
        <div>
          <ContentHeading>Where Travel Opens Doors</ContentHeading>
          <ContentText>
            Our belief that travel can open new doors and enrich lives drives everything we build. With four innovative platforms, Travelpass Group brings people closer to the moments that matter most to create a more interconnected and understanding world.
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
