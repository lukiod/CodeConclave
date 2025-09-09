import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingSpinner = ({ size = "40px", label }) => (
  <SpinnerWrapper>
    <Spinner $size={size} />
    {label && <SpinnerLabel>{label}</SpinnerLabel>}
  </SpinnerWrapper>
);

const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #4f46e5;
  border-radius: 50%;
  width: ${props => props.$size};
  height: ${props => props.$size};
  animation: ${spin} 1s linear infinite;
`;

const SpinnerLabel = styled.span`
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #4f46e5;
`;

export default LoadingSpinner;
