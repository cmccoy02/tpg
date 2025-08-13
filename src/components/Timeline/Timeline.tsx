import React, { useState, useEffect, useRef } from 'react';
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
//Line connecting the dots - needs to be adjusted to go through center of dots
const TimelineLine = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 535px; /* 7 gaps * 60px + 6 dots * 25px (excluding the first and last dot centers) */
  height: 5px;
  background-color: #FFFAF3;
  z-index: 1;
  
  @media (max-width: 768px) {
    width: 90%;
    height: 3px;
  }
  
  @media (max-width: 480px) {
    width: 95%;
    height: 2px;
  }
`;

const DotsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 560px; /* 7 gaps * 60px + 8 dots * 25px */
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    max-width: 90%;
  }
  
  @media (max-width: 480px) {
    max-width: 95%;
  }
`;
//needs to be centered and adjusted to be above the dots
const YearLabel = styled.div`
  position: absolute;
  top: -40px;
  left: 50%;
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #FFFAF3;
  transform: translateX(-50%);
  white-space: nowrap; // Prevents text wrapping
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    top: -30px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.7rem;
    top: -25px;
  }
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
  
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
  
  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
  }
`;
//Card that pops up when a dot is clicked
const CardContainer = styled.div<{ isVisible: boolean }>`
  position: absolute;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 150px;
  background-color: #FFFAF3;
  color: #011111;
  border-radius: 12px;
  padding: 1rem;
  font-size: 0.9rem;
  line-height: 1.4;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.isVisible ? 1 : 0};
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  z-index: 3;
`;

const CardTitle = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const CardEvent = styled.div`
  font-size: 0.8rem;
`;

const timelineData = [
  {
    year: '2007',
    title: 'Founding',
    event: 'Inspired by their own adventures, a team of travelers set out to raise the bar for what travel can be.'
  },
  {
    year: '2008',
    title: 'First Booking',
    event: 'Our very first traveler checks in! 2 nights in Santa Barbara marks the start of something big.'
  },
  {
    year: '2013',
    title: '1 Million Bookings',
    event: 'Celebrating a major milestone.'
  },
  {
    year: '2015',
    title: '5 Million Bookings',
    event: 'Gaining momentum with 5 million bookings and growing demand.'
  },
  {
    year: '2019',
    title: 'A New Milestone',
    event: 'Reaching new heights in travel with 10 million bookings.'
  },
  {
    year: '2023',
    title: 'Travelpass Brand Launch',
    event: 'Explore, Plan, Book your best trip yet with Travelpass.'
  },
  {
    year: '2023',
    title: 'Nitecrawler Brand Launch',
    event: 'Book last-minute with exclusive member perks with our newest brand, Nitecrawler.'
  },
  {
    year: '2025',
    title: '20 Million Bookings (And Counting)',
    event: 'Unlocking what\'s next in the future of travel with more than 20 million bookings.'
  }
];

const Timeline: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Auto-activate the first dot (2007) when timeline comes into view
            setActiveIndex(0);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the timeline is visible
        rootMargin: '0px 0px -100px 0px' // Trigger slightly before fully in view
      }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <TimelineContainer ref={timelineRef}>
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
        {activeIndex !== null && (
          <>
            <CardTitle>{timelineData[activeIndex].title}</CardTitle>
            <CardEvent>{timelineData[activeIndex].event}</CardEvent>
          </>
        )}
      </CardContainer>
    </TimelineContainer>
  );
};

export default Timeline;
