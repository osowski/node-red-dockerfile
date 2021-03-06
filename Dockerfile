# Dockerfile for Node-RED - pulls latest master code from git
# https://gist.github.com/dceejay/9435867
# Use the node.js v0.10.36 engine
FROM node:0.10-slim
MAINTAINER osowski

RUN mkdir /root/.node-red
 
# download latest stable node-red
RUN npm install -g when \
	node-red

ADD custom-settings.js /root/.node-red/settings.js

# use external storage for the user directory
VOLUME /root/.node-red

# expose port
EXPOSE 8080
 
# Set the default command to execute
# when creating a new container
CMD /usr/local/bin/node-red
