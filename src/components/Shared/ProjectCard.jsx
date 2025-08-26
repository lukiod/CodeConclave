import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { 
  FaCode, FaTrash, FaShareAlt, FaEllipsisV, FaLock, FaGlobe, 
  FaUser, FaPencilAlt
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
    setShowMenu((s) => !s);
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
  
  // Keep a small helper in case you want to programmatically navigate (not strictly needed)
  const handleNavigate = (e) => {
    // If renaming is active, don't navigate
    if (isRenaming) {
      e && e.preventDefault();
      return;
    }
    // Let Link handle navigation by default when clicking the <Link> elements.
  };

  // Format the creation date
  const formattedDate = project.createdAt 
    ? formatDistanceToNow(new Date(project.createdAt), { addSuffix: true })
    : 'Unknown date';
  
  return (
    <CardContainer>
      <CardContent>
        <CardHeader>
          {/* Left side: clickable area (link) containing icon + title */}
          <HeaderLeft as={CardLink} to={`/projects/${project._id}`} onClick={handleNavigate}>
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
                  aria-label="Rename project"
                />
              </RenameForm>
            ) : (
              <CardTitle title={project.name}>{project.name}</CardTitle>
            )}
          </HeaderLeft>

          {/* Menu button lives outside the Link so the dropdown is not inside the anchor */}
          <MenuArea>
            <MenuButton
              onClick={handleMenuClick}
              aria-label="Project options"
              aria-haspopup="menu"
              aria-expanded={showMenu}
            >
              <FaEllipsisV />
            </MenuButton>

            {showMenu && (
              <MenuDropdown ref={menuRef} role="menu" aria-label={`Options for ${project.name}`}>
                <MenuItem onClick={handleRenameClick} role="menuitem" tabIndex={0}>
                  <FaPencilAlt />
                  <span>Rename</span>
                </MenuItem>
                
                <MenuItem onClick={handleShareClick} role="menuitem" tabIndex={0}>
                  <FaShareAlt />
                  <span>Share</span>
                </MenuItem>
                
                <MenuItem onClick={handleDeleteClick} danger role="menuitem" tabIndex={0}>
                  <FaTrash />
                  <span>Delete</span>
                </MenuItem>
              </MenuDropdown>
            )}
          </MenuArea>
        </CardHeader>

        {/* Clickable description + footer area — also wrapped with Link so clicking them opens project */}
        <ContentLink to={`/projects/${project._id}`} onClick={handleNavigate}>
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
        </ContentLink>
      </CardContent>
    </CardContainer>
  );
};

/* -------------------------
   Styled components
   ------------------------- */

const CardContainer = styled.div`
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  overflow: visible; /* allow dropdown to appear outside the card if needed */
  transition: transform 0.2s, box-shadow 0.2s;
  height: 100%;
  position: relative;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

/* CardContent stays the same */
const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

/* Header is now split: left link area and menu area */
const CardHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
  gap: 12px;
`;

/* a Link-styled wrapper used for left header area (icon + title) */
const CardLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: inherit;
  flex: 1;
  min-width: 0; /* allow child text truncation */
`;

/* HeaderLeft is same shape as before but typed as CardLink */
const HeaderLeft = styled(CardLink)``;

/* MenuArea holds the button + dropdown; it's outside the link so dropdown is positioned within card */
const MenuArea = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

/* Keep the icon block */
const CardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--color-surface-light);
  color: var(--color-primary);
  border-radius: 8px;
  flex-shrink: 0;

  svg {
    font-size: 18px;
  }
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

/* Rename input styles unchanged */
const RenameForm = styled.form`
  flex: 1;
  margin-right: 10px;
`;

const RenameInput = styled.input`
  width: 100%;
  padding: 6px 8px;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid var(--color-primary);
  border-radius: 4px;
  outline: none;
  color: var(--color-text-primary);
  background: var(--color-background);
`;

/* Menu button unchanged */
const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  color: var(--color-text-tertiary);
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--color-surface);
    color: var(--color-text-secondary);
  }

  svg {
    font-size: 14px;
  }
`;

/* Dropdown positioned relative to MenuArea (so it visually sits inside card) */
const MenuDropdown = styled.div`
  position: absolute;
  top: calc(100% + 6px); /* just below the button */
  right: 0;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.12);
  overflow: hidden;
  z-index: 1000;
  min-width: 160px;
`;

/* Menu item unchanged */
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
  color: ${props => props.danger ? 'var(--color-danger)' : 'var(--color-text-secondary)'};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${props => props.danger ? 'rgba(239, 68, 68, 0.06)' : 'var(--color-surface)'};
  }

  svg {
    font-size: 14px;
    color: ${props => props.danger ? 'var(--color-danger)' : 'var(--color-text-tertiary)'};
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-border);
  }
`;

/* ContentLink wraps the description + footer area so they remain clickable */
const ContentLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
`;

/* Description + footer unchanged */
const CardDescription = styled.p`
  margin: 0 0 20px;
  color: var(--color-text-secondary);
  font-size: 14px;
  line-height: 1.5;
  flex: 1;

  /* Display only 2 lines with ellipsis */
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
  color: ${props => props.isPublic ? 'var(--color-success)' : 'var(--color-text-secondary)'};
  background-color: ${props => props.isPublic ? 'rgba(34, 197, 94, 0.1)' : 'var(--color-surface)'};
  padding: 4px 8px;
  border-radius: 4px;

  svg {
    font-size: 10px;
  }
`;

const CreatedDate = styled.div`
  font-size: 12px;
  color: var(--color-text-tertiary);
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
  background-color: var(--color-surface-light);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);

  svg {
    font-size: 12px;
  }
`;

const OwnerName = styled.div`
  font-size: 12px;
  color: var(--color-text-secondary);
`;

export default ProjectCard;
