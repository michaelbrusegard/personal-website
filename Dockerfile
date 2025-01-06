FROM imbios/bun-node:22-slim AS base

FROM base AS deps

WORKDIR /app

ENV NODE_ENV=production

COPY package.json bun.lockb ./
RUN bun install  --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
ENV SKIP_ENV_VALIDATION=true

RUN bun run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=true
ENV SKIP_ENV_VALIDATION=true

RUN addgroup --system --gid 1002 nodejs && \
  adduser --system --uid 1002 nextjs

RUN mkdir .next && chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3000

CMD ["bun", "run", "server.js"]
