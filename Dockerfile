FROM node:lts-alpine AS base
COPY . /app
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

RUN pnpm i -g http-server

FROM base AS dependencies
COPY ./package.json ./pnpm-lock.yaml /app/
WORKDIR /app
RUN pnpm install --frozen-lockfile

FROM dependencies AS build
COPY ./package.json ./pnpm-lock.yaml /app/
COPY --from=dependencies /app/node_modules /app/node_modules
WORKDIR /app
RUN pnpm run build

FROM build
COPY --from=build /app/build/client /app/build/client
WORKDIR /app
EXPOSE 5173
CMD ["npx", "http-server", "build/client", "-p 5173"]