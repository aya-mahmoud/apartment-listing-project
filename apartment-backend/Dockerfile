# Use the official Node.js image as the base
FROM node:16

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies for the backend
RUN npm install

# Copy all other application files
COPY . .

# Build the NestJS app
RUN npm run build

# Download the wait-for-it script
RUN curl -sSL https://github.com/vishnubob/wait-for-it/raw/master/wait-for-it.sh -o /usr/local/bin/wait-for-it \
  && chmod +x /usr/local/bin/wait-for-it

# Expose the backend port (example: 3001)
EXPOSE 3001
