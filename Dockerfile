# Install dependencies
FROM node:16-alpine as dependencies
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Build the app
FROM node:16-alpine as builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN yarn build

# # Run the app
# FROM node:16-alpine as runner
# WORKDIR /app

# ENV NODE_ENV production
# ENV PORT 3000

# COPY --from=builder /app/next.config.mjs ./
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json

# EXPOSE 3000
# CMD ["yarn", "start"]