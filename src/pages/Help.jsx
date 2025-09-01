import { useState } from 'react';
import styled from 'styled-components';
import { 
  FaQuestionCircle, 
  FaRocket, 
  FaBook, 
  FaTools, 
  FaEnvelope, 
  FaGithub, 
  FaDiscord,
  FaChevronDown,
  FaChevronRight,
  FaCode,
  FaPlay,
  FaShare,
  FaDownload,
  FaUpload
} from 'react-icons/fa';

const Help = () => {
  const [activeSection, setActiveSection] = useState('faq');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "How do I create a new project?",
      answer: "Click the 'New Project' button on the dashboard, enter a project name and description, and choose your preferred programming language. Your project will be created with a default file structure."
    },
    {
      id: 2,
      question: "Can I collaborate with others on projects?",
      answer: "Yes! Use the 'Share' button in your project to invite others via email. They'll receive an invitation and can join your project as collaborators."
    },
    {
      id: 3,
      question: "How do I run my code?",
      answer: "Open any code file in the editor and click the 'Run' button (play icon) in the toolbar. The code will execute and show results in the output panel."
    },
    {
      id: 4,
      question: "What programming languages are supported?",
      answer: "Currently, we support Python, JavaScript, TypeScript, Java, C++, and more. Check the language selector when creating files to see all available options."
    },
    {
      id: 5,
      question: "How do I save my work?",
      answer: "Files are automatically saved as you type. You'll see a 'Saved' indicator in the editor. You can also manually save using Ctrl+S (Cmd+S on Mac)."
    }
  ];

  const gettingStartedSteps = [
    {
      icon: <FaCode />,
      title: "Create Your First Project",
      description: "Start by creating a new project from the dashboard. Choose a meaningful name and select your preferred programming language."
    },
    {
      icon: <FaUpload />,
      title: "Add Your Files",
      description: "Create new files or upload existing ones. You can organize your code with folders and multiple files."
    },
    {
      icon: <FaPlay />,
      title: "Write and Run Code",
      description: "Use our powerful code editor with syntax highlighting and run your code directly in the browser."
    },
    {
      icon: <FaShare />,
      title: "Collaborate with Others",
      description: "Share your projects with teammates and work together in real-time with live collaboration features."
    },
    {
      icon: <FaDownload />,
      title: "Export and Deploy",
      description: "Download your projects or deploy them directly to various platforms with our built-in deployment tools."
    }
  ];

  const troubleshootingItems = [
    {
      issue: "Code won't run",
      solution: "Check that your code has no syntax errors. Make sure you're using the correct programming language for your file extension."
    },
    {
      issue: "Can't save files",
      solution: "Ensure you have a stable internet connection. Try refreshing the page and check if you're still logged in."
    },
    {
      issue: "Collaboration not working",
      solution: "Verify that your collaborators have accepted the invitation. Check that you're all using the latest version of the application."
    },
    {
      issue: "Editor is slow",
      solution: "Try closing unnecessary files and browser tabs. Large files may take longer to load and edit."
    }
  ];

  return (
    <HelpContainer>
      <HelpHeader>
        <h1>Help & Support</h1>
        <p>Find answers to common questions and get help with CodeConclave</p>
      </HelpHeader>

      <NavigationTabs>
        <Tab 
          active={activeSection === 'faq'} 
          onClick={() => setActiveSection('faq')}
        >
          <FaQuestionCircle />
          FAQ
        </Tab>
        <Tab 
          active={activeSection === 'getting-started'} 
          onClick={() => setActiveSection('getting-started')}
        >
          <FaRocket />
          Getting Started
        </Tab>
        <Tab 
          active={activeSection === 'troubleshooting'} 
          onClick={() => setActiveSection('troubleshooting')}
        >
          <FaTools />
          Troubleshooting
        </Tab>
        <Tab 
          active={activeSection === 'contact'} 
          onClick={() => setActiveSection('contact')}
        >
          <FaEnvelope />
          Contact Us
        </Tab>
      </NavigationTabs>

      <ContentArea>
        {activeSection === 'faq' && (
          <FAQSection>
            <h2>Frequently Asked Questions</h2>
            {faqData.map((item) => (
              <FAQItem key={item.id}>
                <FAQQuestion 
                  onClick={() => setExpandedFaq(expandedFaq === item.id ? null : item.id)}
                >
                  <span>{item.question}</span>
                  {expandedFaq === item.id ? <FaChevronDown /> : <FaChevronRight />}
                </FAQQuestion>
                {expandedFaq === item.id && (
                  <FAQAnswer>{item.answer}</FAQAnswer>
                )}
              </FAQItem>
            ))}
          </FAQSection>
        )}

        {activeSection === 'getting-started' && (
          <GettingStartedSection>
            <h2>Getting Started with CodeConclave</h2>
            <StepsContainer>
              {gettingStartedSteps.map((step, index) => (
                <StepCard key={index}>
                  <StepIcon>{step.icon}</StepIcon>
                  <StepNumber>{index + 1}</StepNumber>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </StepCard>
              ))}
            </StepsContainer>
          </GettingStartedSection>
        )}

        {activeSection === 'troubleshooting' && (
          <TroubleshootingSection>
            <h2>Common Issues & Solutions</h2>
            {troubleshootingItems.map((item, index) => (
              <TroubleshootingItem key={index}>
                <IssueTitle>{item.issue}</IssueTitle>
                <IssueSolution>{item.solution}</IssueSolution>
              </TroubleshootingItem>
            ))}
          </TroubleshootingSection>
        )}

        {activeSection === 'contact' && (
          <ContactSection>
            <h2>Get in Touch</h2>
            <ContactGrid>
              <ContactCard>
                <FaEnvelope />
                <h3>Email Support</h3>
                <p>team@codeconclave.com</p>
                <p>We typically respond within 24 hours</p>
              </ContactCard>
              <ContactCard>
                <FaDiscord />
                <h3>Community Discord</h3>
                <p>Join our community for help and discussions</p>
                <a href="https://discord.gg/codeconclave" target="_blank" rel="noopener noreferrer">
                  Join Discord
                </a>
              </ContactCard>
              <ContactCard>
                <FaBook />
                <h3>Documentation</h3>
                <p>Comprehensive guides and API documentation</p>
                <a href="/docs" target="_blank" rel="noopener noreferrer">
                  View Docs
                </a>
              </ContactCard>
            </ContactGrid>
          </ContactSection>
        )}
      </ContentArea>
    </HelpContainer>
  );
};

const HelpContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const HelpHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    color: var(--color-text-primary);
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: var(--color-text-secondary);

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;

const NavigationTabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--color-border);
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`;

const Tab = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  background: ${props => props.active ? 'var(--color-primary)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--color-text-secondary)'};
  border-radius: var(--radius-lg);
  cursor: pointer;
  font-weight: 500;
  transition: all var(--transition-normal);
  white-space: nowrap;

  &:hover {
    background: ${props => props.active ? 'var(--color-primary-dark)' : 'var(--color-surface-light)'};
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    padding: 0.75rem 1rem;
  }
`;

const ContentArea = styled.div`
  min-height: 500px;

  @media (max-width: 768px) {
    min-height: 400px;
  }
`;

const FAQSection = styled.div`
  h2 {
    margin-bottom: 2rem;
    color: var(--color-text-primary);

    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }
  }
`;

const FAQItem = styled.div`
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  margin-bottom: 1rem;
  overflow: hidden;

  @media (max-width: 480px) {
    margin-bottom: 0.75rem;
    border-radius: var(--radius-md);
  }
`;

const FAQQuestion = styled.button`
  width: 100%;
  padding: 1.5rem;
  background: var(--color-surface);
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  color: var(--color-text-primary);
  transition: background-color var(--transition-normal);
  text-align: left;

  &:hover {
    background: var(--color-surface-light);
  }

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
    font-size: 0.9rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;

    span {
      flex: 1;
    }
  }
`;

const FAQAnswer = styled.div`
  padding: 1.5rem;
  background: var(--color-background);
  color: var(--color-text-secondary);
  line-height: 1.6;
  border-top: 1px solid var(--color-border);

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
    font-size: 0.85rem;
  }
`;

const GettingStartedSection = styled.div`
  h2 {
    margin-bottom: 2rem;
    color: var(--color-text-primary);

    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }
  }
`;

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const StepCard = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 2rem;
  text-align: center;
  position: relative;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    transform: none;

    &:hover {
      transform: none;
      box-shadow: var(--shadow-md);
    }
  }
`;

const StepIcon = styled.div`
  font-size: 2rem;
  color: var(--color-primary);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }
`;

const StepNumber = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background: var(--color-primary);
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;

  @media (max-width: 480px) {
    width: 25px;
    height: 25px;
    font-size: 0.8rem;
    top: -8px;
    right: -8px;
  }
`;

const StepTitle = styled.h3`
  color: var(--color-text-primary);
  margin-bottom: 1rem;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

const StepDescription = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const TroubleshootingSection = styled.div`
  h2 {
    margin-bottom: 2rem;
    color: var(--color-text-primary);

    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }
  }
`;

const TroubleshootingItem = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
    margin-bottom: 0.5rem;
    border-radius: var(--radius-md);
  }
`;

const IssueTitle = styled.h3`
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const IssueSolution = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const ContactSection = styled.div`
  h2 {
    margin-bottom: 2rem;
    color: var(--color-text-primary);

    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ContactCard = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 2rem;
  text-align: center;
  transition: transform var(--transition-normal);

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    transform: none;

    &:hover {
      transform: none;
    }
  }

  svg {
    font-size: 2.5rem;
    color: var(--color-primary);
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.75rem;
      margin-bottom: 0.75rem;
    }
  }

  h3 {
    color: var(--color-text-primary);
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
      margin-bottom: 0.75rem;
    }
  }

  p {
    color: var(--color-text-secondary);
    margin-bottom: 1rem;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.85rem;
      margin-bottom: 0.75rem;
    }
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.85rem;
    }
  }
`;

export default Help;
