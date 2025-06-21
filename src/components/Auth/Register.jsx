// client/src/components/Auth/Register.jsx
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import styled from 'styled-components';
import { validateUsername, validatePassword, isValidEmail } from '../../utils/validators';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, error, setError } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear errors when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
    
    if (error) {
      setError(null);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validate username
    const usernameResult = validateUsername(formData.username);
    if (!usernameResult.isValid) {
      newErrors.username = usernameResult.message;
    }
    
    // Validate email
    if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Validate password
    const passwordResult = validatePassword(formData.password);
    if (!passwordResult.isValid) {
      newErrors.password = passwordResult.message;
    }
    
    // Validate password confirmation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Remove confirmPassword before sending to API
      const { confirmPassword, ...userData } = formData;
      await register(userData);
      navigate('/dashboard');
    } catch (err) {
      console.error('Registration error:', err);
      // Error is handled by AuthContext
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer>
      {error && <ErrorAlert>{error}</ErrorAlert>}
      
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Choose a username"
            isInvalid={!!errors.username}
          />
          {errors.username && <ErrorText>{errors.username}</ErrorText>}
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            isInvalid={!!errors.email}
          />
          {errors.email && <ErrorText>{errors.email}</ErrorText>}
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
            isInvalid={!!errors.password}
          />
          {errors.password && <ErrorText>{errors.password}</ErrorText>}
          
          <PasswordRequirements>
            <RequirementTitle>Password must contain:</RequirementTitle>
            <RequirementList>
              <RequirementItem $valid={formData.password.length >= 8}>
                • At least 8 characters
              </RequirementItem>
              <RequirementItem $valid={/[a-z]/.test(formData.password)}>
                • One lowercase letter (a-z)
              </RequirementItem>
              <RequirementItem $valid={/[A-Z]/.test(formData.password)}>
                • One uppercase letter (A-Z)
              </RequirementItem>
              <RequirementItem $valid={/[0-9]/.test(formData.password)}>
                • One number (0-9)
              </RequirementItem>
              <RequirementItem $valid={/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(formData.password)}>
                • One special character (!@#$%^&*()_+-=[]{'{}'}|;:,.{'<>'}?)
              </RequirementItem>
            </RequirementList>
          </PasswordRequirements>
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            isInvalid={!!errors.confirmPassword}
          />
          {errors.confirmPassword && <ErrorText>{errors.confirmPassword}</ErrorText>}
        </FormGroup>
        
        <RegisterButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Creating Account...' : 'Sign Up'}
        </RegisterButton>
      </Form>
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
  border: 1px solid ${props => props.isInvalid ? '#e53e3e' : '#e2e8f0'};
  border-radius: 0.25rem;
  font-size: 1rem;
  background-color: #2d3748;
  color: #e2e8f0;
  
  &::placeholder {
    color: #a0aec0;
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props.isInvalid ? '#e53e3e' : '#3182ce'};
    box-shadow: 0 0 0 3px ${props => props.isInvalid ? 'rgba(229, 62, 62, 0.2)' : 'rgba(49, 130, 206, 0.2)'};
  }
`;

const ErrorText = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #e53e3e;
`;

const RegisterButton = styled.button`
  padding: 0.75rem;
  background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  
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
  font-size: 0.875rem;
`;

const PasswordRequirements = styled.div`
  margin-top: 0.5rem;
  padding: 0.75rem;
  border: 1px solid ${props => props.isInvalid ? '#e53e3e' : '#e2e8f0'};
  border-radius: 0.25rem;
  background-color: #2d3748;
`;

const RequirementTitle = styled.h3`
  font-weight: 600;
  font-size: 1rem;
  color: #e2e8f0;
  margin-bottom: 0.5rem;
`;

const RequirementList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const RequirementItem = styled.li`
  margin-bottom: 0.25rem;
  color: ${props => props.$valid ? '#48bb78' : '#e53e3e'};
`;

export default Register;