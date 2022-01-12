## Setup with Docker

## install Docker

```
curl -fsSL https://get.docker.com | bash -s docker --mirror
```

### or use yum

##### check

```
yum list installed | grep docker
```

##### install

```
yum -y install docker
```

##### start  **docker** 

```
systemctl start docker
```

##### check status

```
systemctl status docker
```

## build Dockerfile  and Run

### cd into interface

```
npm run docker:build
```

#### RUN

```
docker run -p8080:80 rainbow/ui1:v1
```

### config

###### Dockerfile

```
FROM nginx:1.15.2-alpine
COPY ./dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
```



