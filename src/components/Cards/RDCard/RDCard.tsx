import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 275px;
  height: 450px;
  background-color: #FFFAF3;
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Logo = styled.img`
  display: block;
  margin: 0 auto 1.5rem auto;
  max-width: 120px;
  height: auto;
`;

const Title = styled.h3`
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #011111;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Description = styled.p`
  font-family: 'Roboto Slab', serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`;

const CTAButton = styled.a`
  width: 100%;
  height: 48px;
  background-color: #00BBD7;
  color: white;
  border: none;
  border-radius: 8px;
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: #00a5c0;
  }
`;

const RDCard: React.FC = () => {
  return (
    <Card>
      <Content>
        <Logo src="/assets/logos/rd_card_logo.png" alt="RD Logo" />
        <Description>
        Confidently book your next hotel with Reservation Desk, a leading online travel agency with one of the widest hotel selections, competitive rates, and 24/7 support you can count on.
        </Description>
      </Content>
      <CTAButton href="https://reservationdesk.com/" target="_blank" rel="noopener noreferrer">Find Your Stay</CTAButton>
    </Card>
  );
};

export default RDCard; 