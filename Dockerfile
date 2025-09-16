# Start your image with a node base image
FROM node:22.12.0

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY package*.json ./

# Install node packages,
# RUN npm install --legacy-peer-deps

# Copy the project code
# COPY . .

# Expose Vite default port
EXPOSE 5173

# Start the app using npm command
# CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
