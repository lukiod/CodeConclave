[![OSCI-Project-Banner.png](https://i.postimg.cc/76mJvBmF/OSCI-Project-Banner.png)](https://postimg.cc/8JfzMb84)

# Multi-Language Code Editor

A full-stack web application for editing and sharing code with support for multiple languages and Jupyter notebooks (.ipynb files).

## Features

- **Multi-language support**: JavaScript, Python, HTML, CSS, and many more
- **Jupyter Notebook (.ipynb) support**: Edit and visualize Jupyter notebooks directly in the browser
- **Real-time collaboration**: Share your projects with collaborators
- **File system**: Create, edit, and organize files and folders
- **User authentication**: Secure login and registration system
- **Project management**: Create, edit, and delete projects
- **Responsive design**: Works on desktop and mobile devices

## Technology Stack

### Frontend

- React
- Monaco Editor (code editor)
- Styled Components (styling)
- React Router (navigation)
- Axios (API requests)

### Backend

- Node.js
- Express
- MongoDB (database)
- Mongoose (ODM)
- JSON Web Tokens (authentication)

### Deployment

- Vercel (hosting)
- MongoDB Atlas (database hosting)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### Installation

1. Clone the repository

   ```
   git clone https://github.com/yourusername/code-editor-project.git
   cd code-editor-project
   ```
2. Install dependencies for client and server

   ```
   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```
3. Set up environment variables

   - Create a `.env` file in the server directory based on the provided `.env.example`
   - Fill in your MongoDB URI, JWT secret, and other required variables
4. Start the development servers

   ```
   # Start the backend server
   cd server
   npm run dev

   # In a separate terminal, start the frontend
   cd client
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
code-editor-project/
├── client/                 # Frontend React application
│   ├── public/             # Static files
│   └── src/                # Source code
│       ├── assets/         # Images, icons, etc.
│       ├── components/     # Reusable UI components
│       ├── contexts/       # React context providers
│       ├── hooks/          # Custom React hooks
│       ├── pages/          # Page components
│       ├── services/       # API service calls
│       └── utils/          # Utility functions
│
│
├── api/                    # Serverless functions for Vercel
│   └── index.js            # API entry point
│
└── vercel.json             # Vercel deployment configuration
```

## Deployment

This project is configured for deployment on Vercel. Follow these steps to deploy:

1. Create a Vercel account if you don't have one
2. Install the Vercel CLI: `npm install -g vercel`
3. Run `vercel login` and follow the prompts
4. From the project root, run `vercel` to deploy
5. Set up the required environment variables in Vercel's dashboard

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## API Documentation

For detailed API documentation, see [API.md](API.md).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Monaco Editor](https://microsoft.github.io/monaco-editor/) for the code editing capabilities
- [React Split](https://github.com/nathancahill/split) for resizable panel layouts
