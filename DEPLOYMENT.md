# docker/Dockerfile.server

FROM node:16-alpine

WORKDIR /app/server

# Copy package.json and package-lock.json

COPY server/package*.json ./

# Install dependencies

RUN npm ci

# Copy server source code

COPY server/ ./

# Expose the port the app runs on

EXPOSE 5000

# Start the app in development mode with nodemon

CMD ["npm", "run", "dev"]
