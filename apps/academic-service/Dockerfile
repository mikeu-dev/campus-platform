# Dockerfile for Academic Service
FROM node:22-alpine AS builder

WORKDIR /app

# Copy root configurations
COPY package*.json ./
COPY tsconfig.json ./

# Copy the specific package and prisma
COPY apps/academic-service/package.json ./apps/academic-service/
COPY apps/academic-service/prisma ./apps/academic-service/prisma/

# Install dependencies (only production)
RUN npm ci --workspace=apps/academic-service --omit=dev

# Generate Prisma Client
WORKDIR /app/apps/academic-service
RUN npx prisma generate

# Copy source code
WORKDIR /app
COPY apps/academic-service ./apps/academic-service

# Production image
FROM node:22-alpine
WORKDIR /app

COPY --from=builder /app ./

WORKDIR /app/apps/academic-service
EXPOSE 3002

CMD ["npm", "start"]
