FROM node:6.1.0
MAINTAINER Prasath Soosaithasan <prasath.soosaithasan@gmail.com>
ADD . /srv/www
WORKDIR /srv/www
RUN ["npm", "install"]
RUN ["npm", "run", "build"]
EXPOSE 8080
CMD ["npm", "start"]
