import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import styled from 'styled-components';
import { isValidEmail } from '../../utils/validators';
import { FaTimesCircle } from 'react-icons/fa';



const Login = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [formErrors, setFormErrors] = useState({ email: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login, error, setError } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (error) setError(null);

    if (name === 'email') {
      if (value.length > 0 && !isValidEmail(value)) {
        setFormErrors({ ...formErrors, email: 'Please enter a valid email address.' });
      } else {
        setFormErrors({ ...formErrors, email: '' });
      }
    } else if (name === 'password') {
      if (value.length === 0) {
        setFormErrors({ ...formErrors, password: 'Password is required.' });
      } else {
        setFormErrors({ ...formErrors, password: '' });
      }
    } else if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }

  };


  const validateForm = () => {
    const newErrors = { email: '', password: '' };
    let isValid = true;

    if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a  email address.';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.';
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    
    try {
      await login(formData);
      navigate('/dashboard');
    } catch (err) {
      console.error('Login error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <FormContainer>
      {error && <ErrorAlert>{error}</ErrorAlert>}
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            $hasError={!!formErrors.email}
          />


          {formErrors.email && (
            <ErrorWrapper>
              <FaTimesCircle />
              <InlineError>{formErrors.email}</InlineError>
            </ErrorWrapper>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            $hasError={!!formErrors.password}
          />

          {formErrors.password && (
            <ErrorWrapper>
              <FaTimesCircle />
              <InlineError>{formErrors.password}</InlineError>
            </ErrorWrapper>
          )}
        </FormGroup>

        <ForgotPassword type="button" onClick={props.onForgotPassword}>
          Forgot password?
        </ForgotPassword>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Logging in...' : 'Log In'}
        </Button>
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
  border: 1px solid ${props => (props.$hasError ? '#fc8181' : '#e2e8f0')};
  border-radius: 0.25rem;

  font-size: 1rem;
  background-color: #2d3748;
  color: #e2e8f0;
  
  &::placeholder {
    color: #a0aec0;
  }
  
  &:focus {
    outline: none;
    border-color: ${props => (props.$hasError ? '#fc8181' : '#3182ce')};
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.2);
  }

`;


const ForgotPassword = styled.button`
  background: none;
  border: none;
  font-size: 0.875rem;
  color: #3182ce;
  text-align: right;
  margin-top: -0.5rem;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
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

const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
  color: #fc8181;
`;

const InlineError = styled.span`
  font-size: 0.8rem;
`;


export default Login;
