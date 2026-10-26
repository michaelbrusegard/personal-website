# syntax=docker/dockerfile:1

FROM oven/bun:1.4.4-slim@sha256:1846adf22496bd711036aae8be147e57bdebbaea2e5264e3e0b5af1db187d9a4 AS build

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build \
  && find out -type f \( -name '*.html' -o -name '*.txt' -o -name '*.js' \
    -o -name '*.css' -o -name '*.json' -o -name '*.svg' -o -name '*.webmanifest' \
    -o -name '*.glb' \) -size +1k -exec gzip -9 -k {} +

FROM nginxinc/nginx-unprivileged:1.30.6-alpine@sha256:f5116ed4606f3eb015dd4a8e28cb9b351476dc0ad4bc6e9f93b19cec130cdf03

# One worker per node core is wasteful for a small static site under a
# 128Mi memory limit; the read-only root rules out the entrypoint autotune.
RUN sed -i "s/^worker_processes .*/worker_processes  2;/" /etc/nginx/nginx.conf

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/out /usr/share/nginx/html

USER 101

EXPOSE 8080
