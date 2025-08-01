# --- Builder stage ---
FROM oven/bun:1.2.0-alpine AS builder

WORKDIR /app

COPY . .

RUN bun install

# --- Test stage ---
FROM oven/bun:1.2.0-alpine AS test

WORKDIR /app

COPY --from=builder /app ./

RUN bun test

# --- Development stage ---
FROM oven/bun:1.2.0-alpine AS dev

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["bun", "run", "dev"]

# --- Production stage ---
FROM oven/bun:1.2.0-alpine AS production

WORKDIR /app

COPY --from=builder /app ./

RUN rm -rf ./test

EXPOSE 3000

CMD ["bun", "run", "start"]