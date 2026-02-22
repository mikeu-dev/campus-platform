# Dockerfile for Identity Service
FROM node:18-alpine AS builder

WORKDIR /app

# Copy root configurations
COPY package*.json ./
COPY tsconfig.json ./

# Copy the specific package and prisma
COPY apps/identity-service/package.json ./apps/identity-service/
COPY apps/identity-service/prisma ./apps/identity-service/prisma/

# Install dependencies (only production)
RUN npm ci --workspace=apps/identity-service --omit=dev

# Generate Prisma Client
WORKDIR /app/apps/identity-service
RUN npx prisma generate

# Copy source code
WORKDIR /app
COPY apps/identity-service ./apps/identity-service

# Production image
FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app ./

WORKDIR /app/apps/identity-service
EXPOSE 3001

CMD ["npm", "start"]
