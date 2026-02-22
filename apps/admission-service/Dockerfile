# Dockerfile for Admission Service
FROM node:18-alpine AS builder

WORKDIR /app

# Copy root configurations
COPY package*.json ./
COPY tsconfig.json ./

# Copy the specific package and prisma
COPY apps/admission-service/package.json ./apps/admission-service/
COPY apps/admission-service/prisma ./apps/admission-service/prisma/

# Install dependencies (only production)
RUN npm ci --workspace=apps/admission-service --omit=dev

# Generate Prisma Client
WORKDIR /app/apps/admission-service
RUN npx prisma generate

# Copy source code
WORKDIR /app
COPY apps/admission-service ./apps/admission-service

# Production image
FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app ./

WORKDIR /app/apps/admission-service
EXPOSE 3003

CMD ["npm", "start"]
