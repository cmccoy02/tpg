import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 1000;
  background: transparent;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
    height: 60px;
  }
`;

const Logo = styled(Link)`
  height: 60px;
  width: auto;
  display: block;
  
  @media (max-width: 768px) {
    height: 40px;
  }
`;

const LogoImage = styled.img`
  height: 100%;
  width: auto;
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  
  &:focus {
    outline: 2px solid white;
    border-radius: 4px;
  }
`;

const HamburgerLine = styled.div<{ isOpen: boolean }>`
  width: 25px;
  height: 3px;
  background-color: white;
  transition: all 0.3s ease;
  
  &:nth-child(1) {
    transform: ${props => props.isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'};
  }
  
  &:nth-child(2) {
    opacity: ${props => props.isOpen ? '0' : '1'};
  }
  
  &:nth-child(3) {
    transform: ${props => props.isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'};
  }
  
  @media (max-width: 768px) {
    width: 20px;
    height: 2px;
  }
`;

const MenuDropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 2rem;
  background: rgba(1, 17, 17, 0.95);
  border-radius: 8px;
  padding: 1rem;
  min-width: 200px;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all 0.3s ease;
  z-index: 1001;
  
  @media (max-width: 768px) {
    right: 1rem;
    min-width: 180px;
  }
`;

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
`;

const MenuItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-family: 'Archivo Narrow', sans-serif;
  font-weight: 400;
  transition: color 0.2s;
  padding: 0.5rem 0;
  
  &:hover {
    color: #66D210;
  }
`;

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
`;

const DropdownTitle = styled.div`
  color: white;
  font-size: 1rem;
  font-family: 'Archivo Narrow', sans-serif;
  font-weight: 400;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 0.5rem;
`;

const DropdownItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-left: 1rem;
  align-items: flex-start;
`;

const DropdownItem = styled.a<{ brandColor?: string }>`
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  font-family: 'Archivo Narrow', sans-serif;
  font-weight: 400;
  transition: color 0.2s;
  padding: 0.25rem 0;
  
  &:hover {
    color: ${props => props.brandColor || '#66D210'};
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Logo to="/">
        <LogoImage src="/assets/logos/TPG_Beach_hero.png" alt="TPG Logo" />
      </Logo>
      <div style={{ position: 'relative' }}>
        <HamburgerButton onClick={toggleMenu} aria-label="Toggle menu">
          <HamburgerLine isOpen={isMenuOpen} />
          <HamburgerLine isOpen={isMenuOpen} />
          <HamburgerLine isOpen={isMenuOpen} />
        </HamburgerButton>
        
        <MenuDropdown isOpen={isMenuOpen}>
          <MenuContent>
            <MenuItem to="/" onClick={closeMenu}>Home</MenuItem>
            <DropdownContainer>
              <DropdownTitle>Brands</DropdownTitle>
              <DropdownItems>
                <DropdownItem href="https://nitecrawler.com/" target="_blank" rel="noopener noreferrer" brandColor="#F65375">Nitecrawler</DropdownItem>
                <DropdownItem href="https://travelpass.com/" target="_blank" rel="noopener noreferrer" brandColor="#66D210">Travelpass</DropdownItem>
                <DropdownItem href="https://reservationdesk.com/" target="_blank" rel="noopener noreferrer" brandColor="#00BBD7">Reservation Desk</DropdownItem>
                <DropdownItem href="https://reservationcounter.com/" target="_blank" rel="noopener noreferrer" brandColor="#FDA416">Reservation Counter</DropdownItem>
              </DropdownItems>
            </DropdownContainer>
            <MenuItem to="/pages/contact" onClick={closeMenu}>Contact</MenuItem>
          </MenuContent>
        </MenuDropdown>
      </div>
    </HeaderContainer>
  );
};

export default Header; 