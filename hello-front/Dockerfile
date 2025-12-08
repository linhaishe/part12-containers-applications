FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run build

RUN npm install -g serve

CMD ["serve", "dist"]

# option 1
# and run -  `docker build . -t hello-front`  - in bash to init image
# `docker run -it hello-front bash` - to create a container and entry the bash

# option 2
# `docker build . -t hello-front` - build the image
# `docker run -p 5001:3000 hello-front` - the app will be available in http://localhost:5001