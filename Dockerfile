# Use the official Nginx image from Docker Hub
FROM nginx:alpine

# Remove the default Nginx index.html (to avoid conflict)
RUN rm /usr/share/nginx/html/*

# Copy your website files into the container's Nginx directory
COPY . /usr/share/nginx/html

# Expose port 80 (default port for web servers)
EXPOSE 80
