# Start your image with a node base image
# multi-stage
FROM node:22.12.0 AS build
# The /app directory should act as the main application directory
WORKDIR /app
# Copy the app package and package-lock.json file
COPY package*.json ./
# Install node packages,
RUN npm install --legacy-peer-deps
# Copy the project code
COPY . .
# vite build -> dist/
RUN npm run build   

# Runtime phase
FROM node:22.12.0 AS runtime
WORKDIR /app
COPY --from=build /app/dist ./dist
RUN npm install -g serve
# Expose Vite default port
EXPOSE 5173

# Start the app using npm command
CMD ["serve", "-s", "dist", "-l", "5173"]
