FROM node:20.4 as build
RUN mkdir /app
WORKDIR /app
RUN npm install -g @angular/cli
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]