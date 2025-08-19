import styled from 'styled-components';
import React from 'react';

const CellOutput = ({ outputs }) => {
  if (!outputs || outputs.length === 0) {
    return null;
  }

  const renderOutput = (output, index) => {
    if (output.output_type === 'stream') {
      return (
        <StreamOutput key={index} name={output.name}>
          {output.text.join('')}
        </StreamOutput>
      );
    }
    
    if (output.output_type === 'execute_result') {
      return renderExecuteResult(output, index);
    }
    
    if (output.output_type === 'display_data') {
      return renderDisplayData(output, index);
    }
    
    if (output.output_type === 'error') {
      return (
        <ErrorOutput key={index}>
          <div>{output.ename}: {output.evalue}</div>
          {output.traceback && (
            <pre>{output.traceback.join('')}</pre>
          )}
        </ErrorOutput>
      );
    }
    

    return (
      <UnknownOutput key={index}>
        {JSON.stringify(output, null, 2)}
      </UnknownOutput>
    );
  };
  
  // Render execute_result output type
  const renderExecuteResult = (output, index) => {
    // If output contains plain text
    if (output.data && output.data['text/plain']) {
      return (
        <ExecuteResult key={index}>
          {Array.isArray(output.data['text/plain']) 
            ? output.data['text/plain'].join('') 
            : output.data['text/plain']}
        </ExecuteResult>
      );
    }
    
    // If output contains HTML
    if (output.data && output.data['text/html']) {
      const html = Array.isArray(output.data['text/html']) 
        ? output.data['text/html'].join('') 
        : output.data['text/html'];
      
      return (
        <div key={index} dangerouslySetInnerHTML={{ __html: html }} />
      );
    }
    
    // Fallback for other data types
    return (
      <ExecuteResult key={index}>
        {JSON.stringify(output.data, null, 2)}
      </ExecuteResult>
    );
  };
  
  // Render display_data output type
  const renderDisplayData = (output, index) => {
    // Handle images
    if (output.data && output.data['image/png']) {
      const imageData = output.data['image/png'];
      return (
        <ImageOutput key={index}>
          <img src={`data:image/png;base64,${imageData}`} alt="Output" />
        </ImageOutput>
      );
    }
    
    // Handle SVG
    if (output.data && output.data['image/svg+xml']) {
      const svgData = Array.isArray(output.data['image/svg+xml']) 
        ? output.data['image/svg+xml'].join('') 
        : output.data['image/svg+xml'];
      
      return (
        <div key={index} dangerouslySetInnerHTML={{ __html: svgData }} />
      );
    }
    
    // If output contains plain text
    if (output.data && output.data['text/plain']) {
      return (
        <ExecuteResult key={index}>
          {Array.isArray(output.data['text/plain']) 
            ? output.data['text/plain'].join('') 
            : output.data['text/plain']}
        </ExecuteResult>
      );
    }
    
    // Fallback for other data types
    return (
      <ExecuteResult key={index}>
        {JSON.stringify(output.data, null, 2)}
      </ExecuteResult>
    );
  };

  return (
    <OutputContainer>
      {outputs.map(renderOutput)}
    </OutputContainer>
  );
};

const OutputContainer = styled.div`
  padding: 10px;
  font-family: monospace;
  font-size: 14px;
`;

const StreamOutput = styled.pre`
  margin: 0;
  padding: 8px;
  white-space: pre-wrap;
  word-wrap: break-word;
  color: ${props => props.name === 'stderr' ? '#e53e3e' : 'inherit'};
  background-color: ${props => props.name === 'stderr' ? '#FFF5F5' : 'transparent'};
`;

const ExecuteResult = styled.pre`
  margin: 0;
  padding: 8px;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const ErrorOutput = styled.div`
  margin: 0;
  padding: 8px;
  color: #e53e3e;
  background-color: #FFF5F5;
  border-left: 3px solid #e53e3e;
  
  pre {
    margin: 8px 0 0;
    white-space: pre-wrap;
    word-wrap: break-word;
    font-family: monospace;
  }
`;

const ImageOutput = styled.div`
  padding: 8px;
  text-align: center;
  
  img {
    max-width: 10px;
  }
`;

const UnknownOutput = styled.pre`
  margin: 0;
  padding: 8px;
  white-space: pre-wrap;
  word-wrap: break-word;
  color: #718096;
  font-size: 12px;
  background-color: #F7FAFC;
`;

export default CellOutput;