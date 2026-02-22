FROM nginx:alpine

# Copy built files to nginx
COPY build /usr/share/nginx/html

# Configure nginx to serve on port 8000
RUN sed -i 's/listen\s*80;/listen 8000;/g' /etc/nginx/conf.d/default.conf

EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]
