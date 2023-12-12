FROM node:18.17.0-alpine

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install -g pnpm

RUN pnpm install

RUN pnpm run build

EXPOSE 8889

# Démarrez l'application
CMD ["pnpm", "start", "--", "-p", "2223"]