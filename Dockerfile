FROM node:23-alpine AS builder

# Install OpenSSL and compile dependencies
RUN apk add --no-cache openssl

WORKDIR /app

# Copy package files and install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the rest of the application and build
COPY . .
RUN yarn build

CMD ["node", "dist/main"]