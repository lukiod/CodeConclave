// client/src/components/Editor/ExecutionResult.jsx
import { useState } from 'react';
import styled from 'styled-components';
import { FaTimes, FaExpandAlt, FaCompressAlt, FaDownload } from 'react-icons/fa';

const ExecutionResult = ({ result, onClose, language }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!result) return null;

  const { success, output, error, executionTime } = result;

  const handleDownload = () => {
    const content = output || error || 'No output';
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `execution-result-${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <ResultContainer isExpanded={isExpanded}>
      <ResultHeader success={success}>
        <HeaderTitle>
          {success ? 'Execution Successful' : 'Execution Failed'}
          {executionTime && <ExecutionTime> ({executionTime}ms)</ExecutionTime>}
        </HeaderTitle>
        <HeaderActions>
          <ActionButton onClick={handleDownload} title="Download result">
            <FaDownload />
          </ActionButton>
          <ActionButton
            onClick={() => setIsExpanded(!isExpanded)}
            title={isExpanded ? 'Collapse' : 'Expand'}
          >
            {isExpanded ? <FaCompressAlt /> : <FaExpandAlt />}
          </ActionButton>
          <ActionButton onClick={onClose} title="Close">
            <FaTimes />
          </ActionButton>
        </HeaderActions>
      </ResultHeader>
      <ResultContent>
        {output && (
          <OutputSection>
            <OutputTitle>Output:</OutputTitle>
            <OutputText language={language}>{output}</OutputText>
          </OutputSection>
        )}
        {error && (
          <ErrorSection>
            <ErrorTitle>Error:</ErrorTitle>
            <ErrorText>{error}</ErrorText>
          </ErrorSection>
        )}
        {!output && !error && <NoOutputText>No output generated</NoOutputText>}
      </ResultContent>
    </ResultContainer>
  );
};

const ResultContainer = styled.div`
  border: 1px solid var(--color-border);
  border-radius: 6px;
  overflow: hidden;
  background-color: var(--color-surface);
  margin-top: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  max-height: ${props => (props.isExpanded ? 'none' : '300px')};
  position: ${props => (props.isExpanded ? 'fixed' : 'relative')};
  top: ${props => (props.isExpanded ? '50%' : 'auto')};
  left: ${props => (props.isExpanded ? '50%' : 'auto')};
  transform: ${props => (props.isExpanded ? 'translate(-50%, -50%)' : 'none')};
  width: ${props => (props.isExpanded ? '90%' : 'auto')};
  height: ${props => (props.isExpanded ? '80%' : 'auto')};
  z-index: ${props => (props.isExpanded ? '1000' : '1')};
`;

const ResultHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  background-color: ${props => (props.success ? 'var(--color-success-light)' : 'var(--color-error-light)')};
  color: ${props => (props.success ? 'var(--color-success-dark)' : 'var(--color-error-dark)')};
  border-bottom: 1px solid ${props => (props.success ? 'var(--color-success)' : 'var(--color-error)')};
`;

const HeaderTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
`;

const ExecutionTime = styled.span`
  font-weight: normal;
  margin-left: 6px;
  font-size: 12px;
  opacity: 0.8;
`;

const HeaderActions = styled.div`
  display: flex;
  gap: 6px;
`;

const ActionButton = styled.button`
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  padding: 4px;
  border-radius: 4px;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const ResultContent = styled.div`
  padding: 12px 16px;
  overflow: auto;
  max-height: 250px;
  background: var(--color-surface);
`;

const OutputSection = styled.div`
  margin-bottom: 10px;
`;

const OutputTitle = styled.h4`
  font-size: 14px;
  margin: 0 0 8px 0;
  color: var(--color-text-secondary);
`;

const OutputText = styled.pre`
  margin: 0;
  padding: 12px;
  background-color: var(--color-background);
  border-radius: 4px;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  white-space: pre-wrap;
  word-break: break-word;
  overflow: auto;
  max-height: 300px;
  border: 1px solid var(--color-border);
  color: var(--color-text-primary);
`;

const ErrorSection = styled.div`
  margin-top: 10px;
`;

const ErrorTitle = styled.h4`
  font-size: 14px;
  margin: 0 0 8px 0;
  color: var(--color-error);
`;

const ErrorText = styled.pre`
  margin: 0;
  padding: 12px;
  background-color: var(--color-error-light);
  border-radius: 4px;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  color: var(--color-error-dark);
  white-space: pre-wrap;
  word-break: break-word;
  overflow: auto;
  max-height: 300px;
  border: 1px solid var(--color-error);
`;

const NoOutputText = styled.div`
  color: var(--color-text-secondary);
  font-style: italic;
  font-size: 14px;
  text-align: center;
  padding: 20px 0;
`;

export default ExecutionResult;