## Setup with Docker

### install

```
curl -fsSL https://get.docker.com | bash -s docker --mirror
```

### cd into interface

```
npm run docker:build
```

### config

###### Dockerfile

```
FROM nginx:1.15.2-alpine
COPY ./dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
```

