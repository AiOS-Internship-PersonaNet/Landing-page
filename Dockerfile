FROM node:18 AS base
WORKDIR /app
COPY package*.json ./
RUN npm install

# ---- Build ----
FROM base AS build
WORKDIR /app
COPY . .
RUN npm run build

# ---- Release ----
FROM node:18-slim AS release
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/next.config.js ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules

# Install `serve` to run the application
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "build"]
