# Use official Node.js image as the base
FROM node:18.18.0

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install frontend dependencies
RUN npm install

# Copy all other application files
COPY . .

# Accept build argument
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

# Build the Next.js app
RUN npm run build

# Expose the Next.js port (default is 3000)
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]

