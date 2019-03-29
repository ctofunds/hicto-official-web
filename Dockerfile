FROM mhart/alpine-node:8
WORKDIR /
RUN npm install -g serve
ADD dist /dist
ENTRYPOINT exec serve -l 80 dist
EXPOSE 80
