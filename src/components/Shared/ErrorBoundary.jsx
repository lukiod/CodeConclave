import React from 'react';
import styled from 'styled-components';
import { FaExclamationTriangle, FaRedo } from 'react-icons/fa';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null 
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  handleReset = () => {
    this.setState({ 
      hasError: false, 
      error: null, 
      errorInfo: null 
    });
  };

  render() {
    if (this.state.hasError) {
      // Custom error UI
      return (
        <ErrorContainer>
          <ErrorIcon>
            <FaExclamationTriangle />
          </ErrorIcon>
          <ErrorTitle>Oops! Something went wrong</ErrorTitle>
          <ErrorMessage>
            {this.props.fallbackMessage || 
             "We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists."}
          </ErrorMessage>
          
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <ErrorDetails>
              <h4>Error Details (Development Mode):</h4>
              <pre>{this.state.error.toString()}</pre>
              {this.state.errorInfo?.componentStack && (
                <pre>{this.state.errorInfo.componentStack}</pre>
              )}
            </ErrorDetails>
          )}
          
          <ErrorActions>
            <RetryButton onClick={this.handleReset} title="Try again">
              <FaRedo /> Try Again
            </RetryButton>
            <ReloadButton onClick={() => window.location.reload()} title="Refresh page">
              Refresh Page
            </ReloadButton>
          </ErrorActions>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 2rem;
  text-align: center;
  background-color: var(--color-surface, #f8f9fa);
  border-radius: 8px;
  border: 1px solid var(--color-border, #e2e8f0);
  margin: 1rem;
`;

const ErrorIcon = styled.div`
  font-size: 3rem;
  color: var(--color-error, #e53e3e);
  margin-bottom: 1rem;
`;

const ErrorTitle = styled.h2`
  color: var(--color-text-primary, #2d3748);
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;

const ErrorMessage = styled.p`
  color: var(--color-text-secondary, #718096);
  margin-bottom: 2rem;
  max-width: 500px;
  line-height: 1.5;
`;

const ErrorDetails = styled.div`
  background-color: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem 0;
  text-align: left;
  max-width: 600px;
  overflow-x: auto;
  
  h4 {
    margin-top: 0;
    color: #2d3748;
  }
  
  pre {
    font-size: 0.8rem;
    color: #4a5568;
    white-space: pre-wrap;
    word-break: break-all;
  }
`;

const ErrorActions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const RetryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--color-primary, #3182ce);
  color: white;
  border: none;
  border-radius: 0.25rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: var(--color-primary-dark, #2c5282);
  }
`;

const ReloadButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: var(--color-text-secondary, #718096);
  border: 1px solid var(--color-border, #e2e8f0);
  border-radius: 0.25rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: var(--color-surface-light, #f7fafc);
    border-color: var(--color-text-secondary, #718096);
  }
`;

export default ErrorBoundary;