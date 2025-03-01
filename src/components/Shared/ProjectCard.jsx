// src/components/Shared/ProjectCard.jsx
import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { 
  FaCode, FaTrash, FaShareAlt, FaEllipsisV, FaLock, FaGlobe, 
  FaUser, FaPencilAlt, FaExternalLinkAlt
} from 'react-icons/fa';
import { formatDistanceToNow } from 'date-fns';

const ProjectCard = ({ project, onDelete, onRename, onShare, isOwner }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isRenaming, setIsRenaming] = useState(false);
  const [newName, setNewName] = useState(project.name);
  const renameInputRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  
  // Focus rename input when it becomes visible
  useEffect(() => {
    if (isRenaming && renameInputRef.current) {
      renameInputRef.current.focus();
      renameInputRef.current.select();
    }
  }, [isRenaming]);
  
  // Handle clicks outside of menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    
    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  const handleMenuClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowMenu(!showMenu);
  };
  
  const handleDeleteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowMenu(false);
    
    if (window.confirm(`Are you sure you want to delete "${project.name}"? This action cannot be undone.`)) {
      onDelete(project._id);
    }
  };
  
  const handleRenameClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowMenu(false);
    setIsRenaming(true);
  };
  
  const handleRenameSubmit = (e) => {
    if (e) e.preventDefault();
    
    if (newName.trim() && newName !== project.name) {
      onRename(project._id, newName.trim());
    }
    
    setIsRenaming(false);
  };
  
  const handleShareClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowMenu(false);
    
    if (onShare) {
      onShare(project);
    }
  };
  
  const handleCardClick = (e) => {
    // Only navigate if we're not in rename mode
    if (isRenaming) {
      e.preventDefault();
    }
  };

  // Format the creation date
  const formattedDate = project.createdAt 
    ? formatDistanceToNow(new Date(project.createdAt), { addSuffix: true })
    : 'Unknown date';
  
  return (
    <CardContainer>
      <Link to={`/projects/${project._id}`} onClick={handleCardClick}>
        <CardContent>
          <CardHeader>
            <CardIcon>
              <FaCode />
            </CardIcon>
            
            {isRenaming ? (
              <RenameForm onSubmit={handleRenameSubmit}>
                <RenameInput
                  ref={renameInputRef}
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  onBlur={handleRenameSubmit}
                  onClick={(e) => e.stopPropagation()}
                  maxLength={50}
                />
              </RenameForm>
            ) : (
              <CardTitle>{project.name}</CardTitle>
            )}
            
            {/* This is the 3-dot menu button */}
            <MenuButton onClick={handleMenuClick} aria-label="Project options">
              <FaEllipsisV />
            </MenuButton>
            
            {/* Menu with all required options */}
            {showMenu && (
              <MenuDropdown ref={menuRef}>
                               
                <MenuItem onClick={handleRenameClick}>
                  <FaPencilAlt />
                  <span>Rename</span>
                </MenuItem>
                
                <MenuItem onClick={handleShareClick}>
                  <FaShareAlt />
                  <span>Share</span>
                </MenuItem>
                
                <MenuItem onClick={handleDeleteClick} danger>
                  <FaTrash />
                  <span>Delete</span>
                </MenuItem>
              </MenuDropdown>
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
                  : project.owner?.username || 'Unknown User'}
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
  position: relative;
  
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
  flex-shrink: 0;
  
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

const RenameForm = styled.form`
  flex: 1;
  margin-right: 10px;
`;

const RenameInput = styled.input`
  width: 100%;
  padding: 6px 8px;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid #3182ce;
  border-radius: 4px;
  outline: none;
  color: #2d3748;
`;

// The 3-dot menu button
const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  color: #a0aec0;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: #f7fafc;
    color: #4a5568;
  }
  
  svg {
    font-size: 14px;
  }
`;

// Dropdown menu that appears on click
const MenuDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  z-index: 100;
  min-width: 150px;
  overflow: hidden;
  margin-top: 5px;
`;

const MenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  color: ${props => props.danger ? '#e53e3e' : '#4a5568'};
  cursor: pointer;
  transition: 0.2s;
  
  &:hover {
    background-color: ${props => props.danger ? '#FED7D7' : '#f7fafc'};
  }
  
  svg {
    font-size: 14px;
    color: ${props => props.danger ? '#e53e3e' : '#718096'};
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
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