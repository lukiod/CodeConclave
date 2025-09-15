import { useState, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import styled from 'styled-components';
import { isValidEmail } from '../../utils/validators';
import { FaTimesCircle } from 'react-icons/fa';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const Login = props => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({ email: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login, error, setError } = useContext(AuthContext);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (error) setError(null);

    if (name === 'email') {
      if (value.length > 0 && !isValidEmail(value)) {
        setFormErrors({
          ...formErrors,
          email: 'Please enter a valid email address.',
        });
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const newErrors = { email: '', password: '' };
    let isValid = true;

    if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.';
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (isSubmitting) return; // added this guard to prevent multiple submissions
    if (!validateForm()) {
      if (!isValidEmail(formData.email)) {
        emailInputRef.current?.focus();
      } else if (!formData.password) {
        passwordInputRef.current?.focus();
      }
      return;
    }
    setIsSubmitting(true);

    try {
      await login(formData);
      navigate('/getting-started');
    } catch (err) {
      console.error('Login error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer>
      {error && <ErrorAlert role="alert">{error}</ErrorAlert>}
      <Form onSubmit={handleSubmit} noValidate>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            ref={emailInputRef}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            $hasError={!!formErrors.email}
            aria-required="true"
            aria-invalid={!!formErrors.email}
            aria-describedby={formErrors.email ? "email-error" : undefined}
          />

          {formErrors.email && (
            <ErrorWrapper id="email-error" role="alert">
              <FaTimesCircle aria-hidden="true" />
              <InlineError>{formErrors.email}</InlineError>
            </ErrorWrapper>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <PasswordInputWrapper>
            <PasswordInput
              ref={passwordInputRef}
              type={showPassword ? "text" : "password"}

              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              $hasError={!!formErrors.password}
              aria-required="true"
              aria-invalid={!!formErrors.password}
              aria-describedby={formErrors.password ? "password-error" : undefined}
            />
            <PasswordToggle
              type="button"
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              aria-pressed={showPassword}
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </PasswordToggle>
          </PasswordInputWrapper>

          {formErrors.password && (
            <ErrorWrapper id="password-error" role="alert">
              <FaTimesCircle aria-hidden="true" />
              <InlineError>{formErrors.password}</InlineError>
            </ErrorWrapper>
          )}
        </FormGroup>

        <ForgotPasswordLink type="button" onClick={props.onForgotPassword}>
          Forgot password?
        </ForgotPasswordLink>
        <Button
          type="submit"
          disabled={isSubmitting}
          title="Sign in to your account"
        >
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

const PasswordInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const PasswordInput = styled(Input)`
  padding-right: 3rem;
  width: 100%;
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 0.75rem;
  background: none;
  border: none;
  color: #a0aec0;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #e2e8f0;
  }

  &:focus {
    outline: none;
    color: #3182ce;
  }
`;

// FIXED: Renamed from ForgotPassword to ForgotPasswordLink to avoid naming conflict
const ForgotPasswordLink = styled.button`
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

const ErrorAlert = styled.div.attrs({
  role: 'alert',
  'aria-live': 'polite',
})`
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
