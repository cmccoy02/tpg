import React, { useState } from 'react';
import styled from 'styled-components';
import TravelpassCard from '../Cards/TravelpassCard';
import NitecrawlerCard from '../Cards/NitecrawlerCard';
import RCCard from '../Cards/RCCard';
import RDCard from '../Cards/RDCard';

const BrandsSection = styled.section`
  position: relative;
  min-height: 80vh;
  width: 100%;
  background-color: #011111;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 2rem 1rem 2rem;
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
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 2rem;
  }
  
  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const LogoContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 12px;
`;

const Logo = styled.img`
  max-width: 100%;
  height: auto;
  filter: brightness(0) invert(1); /* Makes SVGs white */
  
  &.travelpass {
    filter: none;
  }
  
  @media (max-width: 768px) {
    max-width: 80%;
  }
  
  @media (max-width: 480px) {
    max-width: 70%;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #011111;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1001;
`;

const Brands: React.FC = () => {
  const [openCard, setOpenCard] = useState<null | 'travelpass' | 'nc' | 'rc' | 'rd'>(null);

  const handleOpen = (card: 'travelpass' | 'nc' | 'rc' | 'rd') => setOpenCard(card);
  const handleClose = () => setOpenCard(null);

  return (
    <BrandsSection>
      <Title>Our Brands</Title>
      <Subtitle>
        Book smarter, travel easier, and explore more with each of our brands.
      </Subtitle>
      <LogoGrid>
        <LogoContainer onClick={() => handleOpen('nc')} aria-label="Nitecrawler">
          <Logo src="/assets/logos/NC-white.svg" alt="Nitecrawler" />
        </LogoContainer>
        <LogoContainer onClick={() => handleOpen('travelpass')} aria-label="Travelpass">
          <Logo 
            src="/assets/logos/Travelpass-primary-beach.svg" 
            alt="Travelpass" 
            className="travelpass"
          />
        </LogoContainer>
        <LogoContainer onClick={() => handleOpen('rc')} aria-label="RC">
          <Logo src="/assets/logos/RC_Logo.svg" alt="RC" />
        </LogoContainer>
        <LogoContainer onClick={() => handleOpen('rd')} aria-label="RD">
          <Logo src="/assets/logos/RD_Logo.svg" alt="RD" />
        </LogoContainer>
      </LogoGrid>
      {openCard && (
        <ModalOverlay onClick={handleClose}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={handleClose} aria-label="Close">&times;</CloseButton>
            {openCard === 'travelpass' && <TravelpassCard />}
            {openCard === 'nc' && <NitecrawlerCard />}
            {openCard === 'rc' && <RCCard />}
            {openCard === 'rd' && <RDCard />}
          </ModalContent>
        </ModalOverlay>
      )}
    </BrandsSection>
  );
};

export default Brands;