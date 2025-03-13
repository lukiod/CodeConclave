import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FaKey } from 'react-icons/fa';
import api from '../services/api';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  const token = searchParams.get('token');
  const otp = searchParams.get('otp');

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

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
    <HomeContainer>
      <BackgroundWrapper>
        <BackgroundGradient />
        <CodePatternOverlay />
      </BackgroundWrapper>

      <ContentContainer loaded={loaded}>
        <RightPanel>
          <AuthContainer>
            <LogoContainer>
              <LogoIcon>
                <FaKey />
              </LogoIcon>
              <LogoText>Reset Password</LogoText>
            </LogoContainer>

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
              {error && <ErrorAlert>{error}</ErrorAlert>}
              {message && <SuccessAlert>{message}</SuccessAlert>}
              <Button type="submit">Reset Password</Button>
            </Form>
          </AuthContainer>
        </RightPanel>
      </ContentContainer>

      <Footer>
        <FooterText>© {new Date().getFullYear()} Code Conclave. All rights reserved.</FooterText>
      </Footer>
    </HomeContainer>
  );
};

// Reuse animations and styled components from Homepage.jsx
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #0d1117;
  color: #c9d1d9;
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, #0d1117, #161b22, #0d1117);
  background-size: 200% 200%;
  animation: ${gradient} 15s ease infinite;
`;

const CodePatternOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2358a6ff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.1;
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  z-index: 1;
  opacity: ${props => (props.loaded ? 1 : 0)};
  transform: translateY(${props => (props.loaded ? 0 : '20px')});
  transition: opacity 0.8s ease, transform 0.8s ease;
  justify-content: center;
  align-items: center;
`;

const RightPanel = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  animation: ${fadeIn} 1s ease forwards;
  animation-delay: 0.3s;
`;

const AuthContainer = styled.div`
  background-color: rgba(13, 17, 23, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const LogoIcon = styled.div`
  font-size: 2.5rem;
  color: #58a6ff;
  margin-bottom: 1rem;
`;

const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  background: linear-gradient(45deg, #58a6ff, #a5d6ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  background-color: #161b22;
  border: 1px solid #30363d;
  border-radius: 6px;
  color: #c9d1d9;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #58a6ff;
    box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.2);
  }
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #238636;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #2ea043;
  }
`;

const ErrorAlert = styled.div`
  background-color: rgba(248, 81, 73, 0.1);
  color: #f85149;
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid rgba(248, 81, 73, 0.4);
  font-size: 0.9rem;
`;

const SuccessAlert = styled.div`
  background-color: rgba(46, 160, 67, 0.1);
  color: #2ea043;
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid rgba(46, 160, 67, 0.4);
  font-size: 0.9rem;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 1.5rem;
  background-color: #161b22;
  border-top: 1px solid #30363d;
  z-index: 1;
`;

const FooterText = styled.p`
  color: #8b949e;
  font-size: 0.9rem;
  margin: 0;
`;

export default ResetPassword;