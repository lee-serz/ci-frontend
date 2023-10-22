FROM node:20.4.0-alpine as stage1
WORKDIR /website-public
COPY package.json ./
RUN npm install --legacy-peer-deps

FROM node:20.4.0-alpine as stage2
WORKDIR /website-public
COPY . .
COPY  --from=stage1 /website-public/node_modules ./node_modules
RUN npm run build

FROM node:20.4.0-alpine as final
WORKDIR /website-public
ENV NODE_ENV production
COPY --from=stage2 /website-public ./

EXPOSE 3000
CMD ["npm", "run", "dev"]