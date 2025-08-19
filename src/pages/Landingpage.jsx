import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const LandingPage = () => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
      console.log("Loaded state changed to true");
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleTryFree = () => {
    navigate('/home');
  };

  return (
    <Container>
      <ContentWrapper loaded={loaded}>
        
        <HeadlineWrapper>
          <Headline>Run like you sleep</Headline>
        </HeadlineWrapper>
        
        <Description>
          Empower your teams with AI software engineers who clear the backlog with your laptop closed. Multiply engineering output, all inside your VPC.
        </Description>
        
        <ButtonWrapper>
          <TryButton onClick={handleTryFree}>Try for free</TryButton>
        </ButtonWrapper>
        
        <VideoSection>
          <h2>Educational Video</h2>
          <p>Learn more about coding and projects with this video:</p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Kk5tS2fcfhs"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Educational Video"
          ></iframe>
        </VideoSection>
      </ContentWrapper>
    </Container>
  );
};

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  opacity: ${props => (props.loaded ? 1 : 0)};
  transform: translateY(${props => (props.loaded ? 0 : '30px')});
  transition: opacity 1.2s ease, transform 1.2s ease;
`;

const HeadlineWrapper = styled.div`
  margin-bottom: 1rem;
`;

const Headline = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  color: #333;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto 2rem;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;

const TryButton = styled.button`
  padding: 10px 20px;
  background-color: white;
  border: 1px solid #007bff;
  color: #007bff;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
    background-color: #e6f0fa;
    border-color: #0056b3;
    color: #0056b3;
  }
`;

const VideoSection = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  text-align: center;
  color: #666;
`;

export default LandingPage;