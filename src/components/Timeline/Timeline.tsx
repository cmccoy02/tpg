import React, { useState } from 'react';
import styled from 'styled-components';

const TimelineSection = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-color: #011111;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  color: white;
  text-align: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
`;

const TimelineLine = styled.div`
  position: absolute;
  top: 12.5px;
  left: 50%;
  transform: translateX(-50%);
  width: 535px; /* 7 gaps * 60px + 6 dots * 25px (excluding the first and last dot centers) */
  height: 5px;
  background-color: #FFFAF3;
  z-index: 1;
`;

const DotsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 560px; /* 7 gaps * 60px + 8 dots * 25px */
  margin-bottom: 2rem;
`;

const YearLabel = styled.div`
  position: absolute;
  top: -40px;
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #FFFAF3;
  transform: translateX(-50%);
`;

const Dot = styled.button<{ isActive: boolean }>`
  position: relative;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${props => props.isActive ? '#66D210' : '#FFFAF3'};
  border: none;
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`;

const CardContainer = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 175px;
  height: 100px;
  background-color: #FFFAF3;
  color: #011111;
  border-radius: 8px;
  padding: 1rem;
  font-size: 0.9rem;
  line-height: 1.4;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.isVisible ? 1 : 0};
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  z-index: 3;
  
  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #FFFAF3;
  }
`;

const timelineData = [
  {
    year: '2007',
    event: 'Company founded with a vision to transform travel technology.'
  },
  {
    year: '2008',
    event: 'First major partnership established, marking the beginning of our journey.'
  },
  {
    year: '2013',
    event: 'Expanded into new markets and launched innovative travel solutions.'
  },
  {
    year: '2015',
    event: 'Reached significant milestone with 1 million travelers served.'
  },
  {
    year: '2019',
    event: 'Launched revolutionary platform that redefined travel planning.'
  },
  {
    year: '2023',
    event: 'Achieved global presence with operations in 50+ countries.'
  },
  {
    year: '2024',
    event: 'Introduced AI-powered features for personalized travel experiences.'
  },
  {
    year: '2025',
    event: 'Continuing to innovate and shape the future of travel technology.'
  }
];

const Timeline: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleDotClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <TimelineSection>
      <Title>Timeline</Title>
      <TimelineContainer>
        <TimelineLine />
        <DotsContainer>
          {timelineData.map((item, index) => (
            <div key={index} style={{ position: 'relative' }}>
              <YearLabel>{item.year}</YearLabel>
              <Dot 
                isActive={activeIndex === index}
                onClick={() => handleDotClick(index)}
                aria-label={`Timeline event ${item.year}`}
              />
            </div>
          ))}
        </DotsContainer>
        <CardContainer isVisible={activeIndex !== null}>
          {activeIndex !== null && timelineData[activeIndex].event}
        </CardContainer>
      </TimelineContainer>
    </TimelineSection>
  );
};

export default Timeline;
