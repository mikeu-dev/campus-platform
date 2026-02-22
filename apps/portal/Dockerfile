# Dockerfile for Portal Frontend (SvelteKit)
FROM node:18-alpine AS builder

WORKDIR /app

# Copy root configurations
COPY package*.json ./
COPY tsconfig.json ./

# Copy packages dependencies if any
COPY packages ./packages

# Copy the portal package
COPY apps/portal/package*.json ./apps/portal/
COPY apps/portal/svelte.config.js ./apps/portal/
COPY apps/portal/vite.config.ts ./apps/portal/
COPY apps/portal/postcss.config.js ./apps/portal/
COPY apps/portal/tailwind.config.ts ./apps/portal/
COPY apps/portal/tsconfig.json ./apps/portal/
COPY apps/portal/project.inlang ./apps/portal/project.inlang/

# Install ALL dependencies (needs devDependencies for SvelteKit build)
RUN npm ci --workspace=apps/portal

# Copy the rest of the portal source code
COPY apps/portal/src ./apps/portal/src
COPY apps/portal/static ./apps/portal/static

# Build the SvelteKit app
WORKDIR /app/apps/portal
RUN npm run build

# Production image
FROM node:18-alpine
WORKDIR /app

# Copy the built node app and production dependencies
COPY --from=builder /app/apps/portal/build ./apps/portal/build
COPY --from=builder /app/apps/portal/package.json ./apps/portal/
COPY --from=builder /app/node_modules ./node_modules

WORKDIR /app/apps/portal
EXPOSE 3000

ENV NODE_ENV=production
# Run the node server built by adapter-node
CMD ["node", "build"]
