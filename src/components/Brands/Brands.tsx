import React from 'react';
import styled from 'styled-components';

const BrandsSection = styled.section`
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
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: white;
  text-align: center;
  max-width: 800px;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
`;

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 3rem;
  max-width: 600px;
  width: 100%;
  
  @media (max-width: 768px) {
    gap: 2rem;
  }
  
  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const Logo = styled.img`
  max-width: 100%;
  height: auto;
  filter: brightness(0) invert(1); /* Makes SVGs white */
  
  /* Specific styling for Travelpass logo which might need different treatment */
  &.travelpass {
    filter: none; /* Keep original colors for Travelpass */
  }
`;

const Brands: React.FC = () => {
  return (
    <BrandsSection>
      <Title>Our Brands</Title>
      <Subtitle>
        Book smarter, travel easier, and explore more with each of our brands.
      </Subtitle>
      <LogoGrid>
        <LogoContainer>
          <Logo src="/assets/logos/NC-white.svg" alt="Nitecrawler" />
        </LogoContainer>
        <LogoContainer>
          <Logo 
            src="/assets/logos/Travelpass-primary-beach.svg" 
            alt="Travelpass" 
            className="travelpass"
          />
        </LogoContainer>
        <LogoContainer>
          <Logo src="/assets/logos/RC_Logo.svg" alt="RC" />
        </LogoContainer>
        <LogoContainer>
          <Logo src="/assets/logos/RD_Logo.svg" alt="RD" />
        </LogoContainer>
      </LogoGrid>
    </BrandsSection>
  );
};

export default Brands;
