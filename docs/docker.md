## Setup with Docker

### Ready to work

###### System Requirements

Docker supports the following versions of the [Ubuntu](https://ubuntu.com/server) operating system:

- 

  Ubuntu Hirsute 21.04

- 

  Ubuntu Groovy 20.10

- 

  Ubuntu Focal 20.04 (LTS)

- 

  Ubuntu Bionic 18.04 (LTS)

### install

```
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
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

