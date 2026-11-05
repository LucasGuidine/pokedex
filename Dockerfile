FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install

ENV BROWSER=none
ENV HOST=0.0.0.0

EXPOSE 3000

CMD ["npm", "run", "start"]
