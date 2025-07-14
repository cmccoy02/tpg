import React from 'react';
import styled from 'styled-components';
import DepartureBoard from './DepartureBoard';
import './DepartureBoard.css';

const StatsSection = styled.section`
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
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BodyText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: white;
  text-align: center;
  max-width: 800px;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const DepartureBoardContainer = styled.div`
  margin: 2rem 0;
  transform: scale(1.2);
  
  @media (max-width: 1024px) {
    transform: scale(1.0);
  }
  
  @media (max-width: 768px) {
    transform: scale(0.8);
  }
  
  @media (max-width: 480px) {
    transform: scale(0.6);
  }
`;

const METRICS = [
  { label: 'ALL-TIME BOOKINGS', value: '1,234,567' },
  { label: 'GROSS BOOKING VALUE', value: '$956,142,314' },
  { label: 'TOTAL MILES TRAVELED', value: '763,140,987' },
  { label: 'TOTAL HAPPY TRAVELERS', value: '125,000+' },
];

const Stats: React.FC = () => {
  return (
    <StatsSection>
      <Title>The Numbers Behind The Adventures</Title>
      <DepartureBoardContainer>
        <DepartureBoard metrics={METRICS} />
      </DepartureBoardContainer>
      <BodyText>
        Travelpass Group started with travelers focused on building what was missing in the world of trip planning and travel. Now, that idea has grown into four traveler-first platforms, powered by a passionate team and millions of explorers.
      </BodyText>
    </StatsSection>
  );
};

export default Stats;
