import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import DepartureBoard from './DepartureBoard';
import './DepartureBoard.css';

const StatsSection = styled.section`
  position: relative;
  min-height: 80vh;
  width: 100%;
  background-color: #011111;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 2rem;
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
    transform: scale(0.7);
    margin: 1rem 0;
  }
  
  @media (max-width: 480px) {
    transform: scale(0.5);
    margin: 0.5rem 0;
  }
  
  @media (max-width: 375px) {
    transform: scale(0.5);
  }
`;

const METRICS = [
  { label: 'ALL-TIME BOOKINGS', value: '19,540,203' },
  { label: 'GROSS BOOKING VALUE', value: '$6,793,979,363' },
  { label: 'TOTAL MILES TRAVELED', value: '+3,500,000,000' },
  { label: 'TOTAL HAPPY TRAVELERS', value: '+19,000,000' },
];

const Stats: React.FC = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <StatsSection ref={statsRef}>
      <Title>The Numbers Behind The Adventures</Title>
      <DepartureBoardContainer>
        <DepartureBoard metrics={METRICS} startAnimation={startAnimation} />
      </DepartureBoardContainer>
      <BodyText>
        Travelpass Group started with travelers focused on building what was missing in the world of trip planning and travel. Now, that idea has grown into four traveler-first platforms, powered by a passionate team and millions of explorers.
      </BodyText>
    </StatsSection>
  );
};

export default Stats;
