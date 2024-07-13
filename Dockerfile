# Use the official Node.js image as the base image
FROM node:20

# Create and set the working directory
WORKDIR /usr/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Install nodemon globally for development
RUN npm install -g nodemon

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Run Prisma generate and migrate
RUN npx prisma generate

# Default command for development
CMD ["nodemon", "-L", "--watch", ".", "--exec", "npm", "run", "dev"]