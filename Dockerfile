FROM nginxinc/nginx-unprivileged:alpine

# Copy built files to nginx
COPY build /usr/share/nginx/html

# Configure nginx to serve on port 8000 (default is 8080 for unprivileged)
RUN sed -i 's/listen\s*8080;/listen 8000;/g' /etc/nginx/conf.d/default.conf

EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]
