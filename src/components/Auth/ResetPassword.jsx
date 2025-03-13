// import { useState, useEffect } from 'react';
// import { useSearchParams, useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import api from '../../services/api';

// const ResetPassword = () => {
//   const [searchParams] = useSearchParams();
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState(null);
//   const [message, setMessage] = useState(null);
//   const [isVerified, setIsVerified] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const verifyTokenAndOTP = async () => {
//       const token = searchParams.get('token');
//       const otp = searchParams.get('otp');
      
//       if (token && otp) {
//         try {
//           await api.post('/api/password-reset/verify-token-otp', { token, otp });
//           setIsVerified(true);
//         } catch (err) {
//           setError(err.response?.data?.message || 'Invalid verification link');
//         }
//       }
//     };
    
//     verifyTokenAndOTP();
//   }, [searchParams]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }
    
//     setIsSubmitting(true);
//     try {
//       await api.post('/password-reset/reset', { 
//         token: searchParams.get('token'),
//         password 
//       });
//       setMessage('Password reset successfully!');
//       setTimeout(() => navigate('/login'), 2000);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Password reset failed');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <FormContainer>
//       <h2>Reset Password</h2>
      
//       {error && <ErrorAlert>{error}</ErrorAlert>}
//       {message && <SuccessAlert>{message}</SuccessAlert>}
      
//       {isVerified ? (
//         <Form onSubmit={handleSubmit}>
//           <FormGroup>
//             <Label>New Password</Label>
//             <Input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </FormGroup>
          
//           <FormGroup>
//             <Label>Confirm Password</Label>
//             <Input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </FormGroup>
          
//           <Button type="submit" disabled={isSubmitting}>
//             {isSubmitting ? 'Resetting...' : 'Reset Password'}
//           </Button>
//         </Form>
//       ) : (
//         !error && <LoadingMessage>Verifying your link...</LoadingMessage>
//       )}
//     </FormContainer>
//   );
// };

// // Add styled components similar to ForgotPassword.jsx
// // Include FormContainer, Form, FormGroup, Label, Input, Button, etc.

// export default ResetPassword; 

import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.8rem;
  background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const token = searchParams.get('token');
  const otp = searchParams.get('otp');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await api.post('/auth/reset', { 
        token, 
        otp,
        newPassword: password 
      });
      setMessage('Password reset successfully! Redirecting to login...');
      setTimeout(() => navigate('/home'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Password reset failed');
    }
  };

  return (
    <Container>
      <h2>Reset Password</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
      
      <Form onSubmit={handleSubmit}>
        <Input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <Button type="submit">Reset Password</Button>
      </Form>
    </Container>
  );
};

export default ResetPassword;