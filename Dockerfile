FROM node:9.6.1

#RUN mkdir /src/app
WORKDIR /src/app

ENV PATH /src/app/node_modules/.bin:$PATH

COPY package.json /src/app/package.json
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent

CMD ["npm", "start"]