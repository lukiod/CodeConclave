import { useState, useEffect } from 'react';
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
      {error && <ErrorAlert>{error}</ErrorAlert>}
      {message && <SuccessAlert>{message}</SuccessAlert>}
      
      {isVerified ? (
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>New Password</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label>Confirm Password</Label>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
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

// Add styled components similar to ForgotPassword.jsx
// Include FormContainer, Form, FormGroup, Label, Input, Button, etc.

export default ResetPassword; 