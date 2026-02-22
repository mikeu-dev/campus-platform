# Dockerfile for Public Service
FROM node:22-alpine AS builder

WORKDIR /app

# Copy root configurations
COPY package*.json ./
COPY tsconfig.json ./

# Copy the specific package and prisma
COPY apps/public-service/package.json ./apps/public-service/
COPY apps/public-service/prisma ./apps/public-service/prisma/

# Install dependencies (only production)
RUN npm ci --workspace=apps/public-service --omit=dev

# Generate Prisma Client
WORKDIR /app/apps/public-service
RUN npx prisma generate

# Copy source code
WORKDIR /app
COPY apps/public-service ./apps/public-service

# Production image
FROM node:22-alpine
WORKDIR /app

COPY --from=builder /app ./

WORKDIR /app/apps/public-service
EXPOSE 3004

CMD ["npm", "start"]
