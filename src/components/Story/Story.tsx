import React from 'react';
import styled from 'styled-components';

const StorySection = styled.section`
  position: relative;
  min-height: 100vh;
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
  background-image: url('/assets/images/tikal.jpg');
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

const Content = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 900px;
  padding: 0 2rem;
`;

const Title = styled.h2`
  font-size: 4rem;
  font-weight: 400;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

const StoryText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const TextSection = styled.p`
  font-size: 1.3rem;
  line-height: 1.8;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  font-weight: 300;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const Story: React.FC = () => {
  return (
    <StorySection id="story">
      <BackgroundImage />
      <Overlay />
      <Content>
        <Title>Our Story</Title>
        <StoryText>
          <TextSection>
            The idea behind Travelpass Group began in Guatemala, where our CEO and Co-Founder spent two years living in communities that had little but gave generously. That experience of kindness and connection sparked what Travelpass Group does today: bringing millions of travelers closer to countless cultures, impactful destinations, and memorable experiences.
          </TextSection>
          <TextSection>
            With a bold, global vision for the future, we're reimagining the role technology plays in travel, focused on a faster, smarter, and more personal experience for every trip.
          </TextSection>
        </StoryText>
      </Content>
    </StorySection>
  );
};

export default Story;
