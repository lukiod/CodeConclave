import { useState, useRef } from 'react';
import styled from 'styled-components';
import { verifyOTP, resetPassword } from '../../services/authService';

const OTPVerification = ({ resetToken, onBack }) => {
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [verificationToken, setVerificationToken] = useState(null);
  const otpRef = useRef(null);
  const newPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const verifyResponse = await verifyOTP(resetToken, otp);
      setVerificationToken(resetToken);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || 'OTP verification failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      confirmPasswordRef.current?.focus();
      return;
    }
    
    setIsSubmitting(true);
    try {
      await resetPassword(verificationToken, newPassword);
      setMessage('Password reset successfully! You can now login with your new password.');
      setTimeout(onBack, 3000);
    } catch (err) {
      setError(err.response?.data?.message || 'Password reset failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer>
      <BackButton onClick={onBack}>← Back</BackButton>
      <h2>Verify OTP</h2>
      {error && <ErrorAlert role="alert">{error}</ErrorAlert>}
      {message && <SuccessAlert role="alert">{message}</SuccessAlert>}

      {!verificationToken ? (
        <Form onSubmit={handleVerifyOTP} noValidate>
          <FormGroup>
            <Label htmlFor="otp">OTP Code</Label>
            <Input
              ref={otpRef}
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter 6-digit OTP"
              required
              aria-invalid={!!error}
              aria-describedby={error ? "otp-error" : undefined}
            />
            {error && <ErrorText id="otp-error">{error}</ErrorText>}
          </FormGroup>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Verifying...' : 'Verify OTP'}
          </Button>
        </Form>
      ) : (
        <Form onSubmit={handlePasswordReset} noValidate>
          <FormGroup>
            <Label htmlFor="newPassword">New Password</Label>
            <Input
              ref={newPasswordRef}
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
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
              placeholder="Confirm new password"
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
      )}
    </FormContainer>
  );
};

const FormContainer = styled.div`
  width: 100%;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #3182ce;
  cursor: pointer;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  padding: 0;
  
  &:hover {
    text-decoration: underline;
  }
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

const ErrorText = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #e53e3e;
`;

export default OTPVerification;