// client/src/components/Shared/ProjectCard.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaCode, FaTrash, FaShareAlt, FaEllipsisV, FaLock, FaGlobe, FaUser } from 'react-icons/fa';
import { formatDistanceToNow } from 'date-fns';

const ProjectCard = ({ project, onDelete, isOwner }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, right: 0 });
  
  const handleOptionsClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const rect = e.currentTarget.getBoundingClientRect();
    setMenuPosition({
      top: rect.bottom + window.scrollY,
      right: window.innerWidth - rect.right - window.scrollX
    });
    
    setShowOptions(!showOptions);
  };
  
  const handleDeleteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowOptions(false);
    onDelete();
  };

  // Format the creation date
  const formattedDate = project.createdAt 
    ? formatDistanceToNow(new Date(project.createdAt), { addSuffix: true })
    : 'Unknown date';
  
  return (
    <CardContainer>
      <Link to={`/projects/${project._id}`}>
        <CardContent>
          <CardHeader>
            <CardIcon>
              <FaCode />
            </CardIcon>
            <CardTitle>{project.name}</CardTitle>
            <OptionsButton onClick={handleOptionsClick}>
              <FaEllipsisV />
            </OptionsButton>
            
            {showOptions && (
              <OptionsMenu style={{ top: menuPosition.top, right: menuPosition.right }}>
                {isOwner && (
                  <OptionItem onClick={handleDeleteClick}>
                    <FaTrash />
                    Delete
                  </OptionItem>
                )}
                <OptionItem>
                  <FaShareAlt />
                  Share
                </OptionItem>
              </OptionsMenu>
            )}
          </CardHeader>
          
          <CardDescription>
            {project.description || 'No description provided'}
          </CardDescription>
          
          <CardFooter>
            <CardMeta>
              <VisibilityBadge isPublic={project.isPublic}>
                {project.isPublic ? <FaGlobe /> : <FaLock />}
                {project.isPublic ? 'Public' : 'Private'}
              </VisibilityBadge>
              
              <CreatedDate>Created {formattedDate}</CreatedDate>
            </CardMeta>
            
            <CardOwner>
              <OwnerAvatar>
                <FaUser />
              </OwnerAvatar>
              <OwnerName>
                {isOwner 
                  ? 'You' 
                  : project.owner.username || 'Unknown User'}
              </OwnerName>
            </CardOwner>
          </CardFooter>
        </CardContent>
      </Link>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  height: 100%;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
  
  a {
    text-decoration: none;
    color: inherit;
    display: block;
    height: 100%;
  }
`;

const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
`;

const CardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #ebf8ff;
  color: #3182ce;
  border-radius: 8px;
  margin-right: 12px;
  
  svg {
    font-size: 18px;
  }
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #2d3748;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const OptionsButton = styled.button`
  background-color: transparent;
  border: none;
  color: #a0aec0;
  cursor: pointer;
  padding: 8px;
  margin: -8px;
  border-radius: 4px;
  
  &:hover {
    background-color: #f7fafc;
    color: #4a5568;
  }
  
  svg {
    font-size: 14px;
  }
`;

const OptionsMenu = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  width: 150px;
  overflow: hidden;
`;

const OptionItem = styled.div`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #4a5568;
  cursor: pointer;
  
  &:hover {
    background-color: #f7fafc;
  }
  
  svg {
    font-size: 14px;
    color: #718096;
  }
`;

const CardDescription = styled.p`
  margin: 0 0 20px;
  color: #718096;
  font-size: 14px;
  line-height: 1.5;
  flex: 1;
  
  // Display only 2 lines with ellipsis
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
`;

const CardMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const VisibilityBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${props => props.isPublic ? '#38a169' : '#718096'};
  background-color: ${props => props.isPublic ? '#f0fff4' : '#f7fafc'};
  padding: 4px 8px;
  border-radius: 4px;
  
  svg {
    font-size: 10px;
  }
`;

const CreatedDate = styled.div`
  font-size: 12px;
  color: #a0aec0;
`;

const CardOwner = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const OwnerAvatar = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #edf2f7;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #718096;
  
  svg {
    font-size: 12px;
  }
`;

const OwnerName = styled.div`
  font-size: 12px;
  color: #718096;
`;

export default ProjectCard;