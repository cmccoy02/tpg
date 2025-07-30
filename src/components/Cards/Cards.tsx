import React, { useState } from 'react';
import styled from 'styled-components';
import TravelpassCard from './TravelpassCard';
import NitecrawlerCard from './NitecrawlerCard';
import RCCard from './RCCard';
import RDCard from './RDCard';

const CardsSection = styled.section`
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

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-width: 1200px;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Cards: React.FC = () => {
  return (
    <CardsSection>
      <Title>Our Brands</Title>
      <CardsContainer>
        <CardWrapper>
          <TravelpassCard />
        </CardWrapper>
        <CardWrapper>
          <NitecrawlerCard />
        </CardWrapper>
        <CardWrapper>
          <RCCard />
        </CardWrapper>
        <CardWrapper>
          <RDCard />
        </CardWrapper>
      </CardsContainer>
    </CardsSection>
  );
};

export default Cards;
