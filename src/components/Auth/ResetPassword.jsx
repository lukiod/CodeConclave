import { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import api from '../../services/api';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  useEffect(() => {
    const verifyTokenAndOTP = async () => {
      const token = searchParams.get('token');
      const otp = searchParams.get('otp');
      
      if (token && otp) {
        try {
          await api.post('/api/password-reset/verify-token-otp', { token, otp });
          setIsVerified(true);
        } catch (err) {
          setError(err.response?.data?.message || 'Invalid verification link');
        }
      }
    };
    
    verifyTokenAndOTP();
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      confirmPasswordRef.current?.focus();
      return;
    }
    
    setIsSubmitting(true);
    try {
      await api.post('/password-reset/reset', { 
        token: searchParams.get('token'),
        password 
      });
      setMessage('Password reset successfully!');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Password reset failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer>
      <h2>Reset Password</h2>
      {error && <ErrorAlert role="alert">{error}</ErrorAlert>}
      {message && <SuccessAlert role="alert">{message}</SuccessAlert>}
      
      {isVerified ? (
        <Form onSubmit={handleSubmit} noValidate>
          <FormGroup>
            <Label htmlFor="password">New Password</Label>
            <Input
              ref={passwordRef}
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-invalid={!!error}
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              ref={confirmPasswordRef}
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              aria-invalid={!!error}
              aria-describedby={error ? "password-error" : undefined}
            />
            {error && <ErrorText id="password-error">{error}</ErrorText>}
          </FormGroup>
          
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Resetting...' : 'Reset Password'}
          </Button>
        </Form>
      ) : (
        !error && <LoadingMessage>Verifying your link...</LoadingMessage>
      )}
    </FormContainer>
  );
};

// Styled components with dark theme
const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 0.9rem;
  color: #e2e8f0;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${props => props['aria-invalid'] ? '#e53e3e' : '#e2e8f0'};
  border-radius: 0.25rem;
  font-size: 1rem;
  background-color: #2d3748;
  color: #e2e8f0;
  
  &::placeholder {
    color: #a0aec0;
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props['aria-invalid'] ? '#e53e3e' : '#3182ce'};
    box-shadow: 0 0 0 3px ${props => props['aria-invalid'] ? 'rgba(229, 62, 62, 0.2)' : 'rgba(49, 130, 206, 0.2)'};
  }
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 0.5rem;
  
  &:hover:not(:disabled) {
    background-color: #2c5282;
  }
  
  &:disabled {
    background-color: #a0aec0;
    cursor: not-allowed;
  }
`;

const ErrorAlert = styled.div`
  background-color: #fed7d7;
  color: #c53030;
  padding: 0.75rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const SuccessAlert = styled.div`
  background-color: #c6f6d5;
  color: #2f855a;
  padding: 0.75rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #a0aec0;
  font-size: 1rem;
`;

const ErrorText = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #e53e3e;
`;

export default ResetPassword;