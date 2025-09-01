import styled, { keyframes, css } from 'styled-components';
import { FaSpinner, FaCode, FaFolder } from 'react-icons/fa';

// Generic Loading Spinner
export const LoadingSpinner = ({ size = '20px', color = 'var(--color-primary, #3182ce)' }) => (
  <SpinnerIcon size={size} color={color}>
    <FaSpinner />
  </SpinnerIcon>
);

// Loading component with message
export const LoadingWithMessage = ({ message = 'Loading...', icon }) => (
  <LoadingContainer>
    {icon ? (
      <LoadingIcon>{icon}</LoadingIcon>
    ) : (
      <LoadingSpinner size="24px" />
    )}
    <LoadingMessage>{message}</LoadingMessage>
  </LoadingContainer>
);

// Skeleton loading for project cards
export const ProjectCardSkeleton = () => (
  <SkeletonCard>
    <SkeletonHeader>
      <SkeletonAvatar />
      <SkeletonTitle />
    </SkeletonHeader>
    <SkeletonContent>
      <SkeletonLine width="100%" />
      <SkeletonLine width="80%" />
      <SkeletonLine width="60%" />
    </SkeletonContent>
    <SkeletonFooter>
      <SkeletonBadge />
      <SkeletonBadge />
    </SkeletonFooter>
  </SkeletonCard>
);

// File explorer loading skeleton
export const FileExplorerSkeleton = () => (
  <FileSkeletonContainer>
    {Array(5).fill(0).map((_, index) => (
      <FileSkeletonItem key={index} indent={Math.floor(Math.random() * 3)}>
        <FaFolder style={{ color: '#a0aec0' }} />
        <SkeletonLine width="150px" height="16px" />
      </FileSkeletonItem>
    ))}
  </FileSkeletonContainer>
);

// Button loading state
export const ButtonSpinner = ({ children, isLoading, ...props }) => (
  <button {...props} disabled={isLoading || props.disabled}>
    {isLoading ? (
      <ButtonContent>
        <LoadingSpinner size="14px" color="currentColor" />
        <span style={{ marginLeft: '8px' }}>Loading...</span>
      </ButtonContent>
    ) : (
      children
    )}
  </button>
);

// Styled components
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const SpinnerIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: ${props => props.size};
    height: ${props => props.size};
    color: ${props => props.color};
    animation: ${spin} 1s linear infinite;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
`;

const LoadingIcon = styled.div`
  font-size: 2rem;
  color: var(--color-primary, #3182ce);
  margin-bottom: 1rem;
`;

const LoadingMessage = styled.p`
  color: var(--color-text-secondary, #718096);
  font-size: 0.9rem;
  margin: 0.5rem 0 0 0;
`;

const ButtonContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Skeleton Styles - FIXED: Use css helper to properly inject keyframes
const skeletonAnimation = css`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.2s ease-in-out infinite;
`;

const SkeletonCard = styled.div`
  border: 1px solid var(--color-border, #e2e8f0);
  border-radius: 8px;
  padding: 1rem;
  background-color: var(--color-surface, #ffffff);
`;

const SkeletonHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const SkeletonAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  ${skeletonAnimation}
`;

const SkeletonTitle = styled.div`
  height: 20px;
  width: 150px;
  border-radius: 4px;
  ${skeletonAnimation}
`;

const SkeletonContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const SkeletonLine = styled.div`
  height: ${props => props.height || '14px'};
  width: ${props => props.width || '100%'};
  border-radius: 4px;
  ${skeletonAnimation}
`;

const SkeletonFooter = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SkeletonBadge = styled.div`
  height: 24px;
  width: 60px;
  border-radius: 12px;
  ${skeletonAnimation}
`;

const FileSkeletonContainer = styled.div`
  padding: 0.5rem;
`;

const FileSkeletonItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0;
  padding-left: ${props => props.indent * 1.5}rem;
`;