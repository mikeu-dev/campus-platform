# Dockerfile for Learning Service
FROM node:22-alpine AS builder

WORKDIR /app

# Copy root configurations
COPY package*.json ./
COPY tsconfig.json ./

# Copy the specific package and prisma
COPY apps/learning-service/package.json ./apps/learning-service/
COPY apps/learning-service/prisma ./apps/learning-service/prisma/

# Install dependencies (only production)
RUN npm ci --workspace=apps/learning-service --omit=dev

# Generate Prisma Client
WORKDIR /app/apps/learning-service
RUN npx prisma generate

# Copy source code
WORKDIR /app
COPY apps/learning-service ./apps/learning-service

# Production image
FROM node:22-alpine
WORKDIR /app

COPY --from=builder /app ./

WORKDIR /app/apps/learning-service
EXPOSE 3005

CMD ["npm", "start"]
