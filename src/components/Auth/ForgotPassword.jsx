import { useState, useRef } from 'react';
import styled from 'styled-components';
import { isValidEmail } from '../../utils/validators';
import { requestPasswordReset } from '../../services/authService';

const ForgotPassword = (props) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const emailInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      emailInputRef.current?.focus();
      return;
    }
    
    setError(null);
    setMessage(null);
    setIsSubmitting(true);
    
    try {
      const response = await requestPasswordReset(email);
      setMessage('Password reset instructions have been sent to your email');
      if (props.onSuccess) {
        props.onSuccess(response.data.token);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to request password reset');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer>
      {error && (
        <ErrorAlert 
          role="alert" 
          aria-live="assertive"
          aria-atomic="true"
        >
          {error}
        </ErrorAlert>
      )}
      {message && (
        <SuccessAlert 
          role="alert" 
          aria-live="polite"
          aria-atomic="true"
        >
          {message}
        </SuccessAlert>
      )}
      
      <Form onSubmit={handleSubmit} noValidate>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            ref={emailInputRef}
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email address"
            aria-required="true"
            aria-invalid={!!error}
            aria-describedby={error ? "email-error-msg" : undefined}
          />
           {error && <ErrorText id="email-error-msg">{error}</ErrorText>}
        </FormGroup>
        
        <FormText>
          Enter your email address and we'll send you instructions to reset your password.
        </FormText>
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? (
            <span aria-live="polite" aria-atomic="true">Sending...</span>
          ) : (
            'Reset Password'
          )}
        </Button>
      </Form>
      
      <BackToLogin onClick={props.onBack}>
        ← Back to Login
      </BackToLogin>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  width: 100%;
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

const FormText = styled.p`
  font-size: 0.875rem;
  color: #a0aec0;
  margin-top: -0.5rem;
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

const BackToLogin = styled.button`
  background: none;
  border: none;
  color: #3182ce;
  cursor: pointer;
  font-size: 0.875rem;
  margin-top: 1rem;
  padding: 0;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ErrorText = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #e53e3e;
`;

export default ForgotPassword;