# Contributing to CodeConclave

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm/yarn
- Git

### Setup
```bash
git clone https://github.com/your-username/CodeConclave.git
cd CodeConclave
git remote add upstream https://github.com/lukiod/CodeConclave.git
cd client
npm install
npm run dev
```

## Development Workflow

### Branch Naming
- `feature/feature-name`
- `bugfix/issue-description`
- `refactor/component-name`

### Stay Updated
```bash
git fetch upstream
git checkout main
git merge upstream/main
git checkout feature/your-branch
git rebase main
```

## Code Standards

### File Structure
```
src/
├── components/
├── contexts/
├── hooks/
├── pages/
├── services/
└── utils/
```

### Naming
- Components: `PascalCase`
- Files: `kebab-case`
- Variables: `camelCase`
- Constants: `SCREAMING_SNAKE_CASE`

### Import Order
```javascript
// External libraries
import React, { useState } from 'react';
import styled from 'styled-components';

// Internal hooks/contexts
import { useAuth } from '../contexts/AuthContext';

// Services/utils
import { apiService } from '../services/api';

// Components
import Button from '../components/Button';
```

## Avoiding Merge Conflicts

### 1. Component Development
- Create new components instead of modifying existing ones
- Use composition over modification
- Keep components in feature-specific folders



### 2. Dependencies
```bash
# After pulling changes
rm package-lock.json
npm install
git add package-lock.json
git commit -m "chore: update dependencies"
```

### 3. Monaco Editor
- Don't create multiple editor instances
- Clean up properly in useEffect
- Check if languages are registered before adding

## Pull Request Process

### Before PR
```bash
git fetch upstream && git rebase upstream/main
npm test
npm run build
npm run lint
```

### PR Format
**Title:** `type(scope): description`
- `feat(editor): add syntax highlighting`
- `fix(ui): resolve mobile layout issue`

**Include:**
- What changed and why
- How to test
- Screenshots for UI changes

## Testing
```bash
npm test                    # Run tests
npm run build              # Test build
npm run dev                # Test locally
```

## Common Issues

### Styled Components
- Use unique component names
- Avoid global styles

### Package Conflicts
- Delete package-lock.json and reinstall after pulling
- Don't manually edit lock files

## Getting Help
- Open [GitHub Issues](https://github.com/lukiod/CodeConclave/issues) for bugs
- Use [Discussions](https://github.com/lukiod/CodeConclave/discussions) for questions
- Tag maintainers for merge conflict help

---

**Quick Start:** Fork → Clone → Install → Create branch → Make changes → Test → PR
