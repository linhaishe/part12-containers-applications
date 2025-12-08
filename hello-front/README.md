# hello-front

a small demo for docker

1. run docker
2. 进入对应的文件夹
3. npm i
4. 运行下面的命令
5. docker pull node:20

# option 1
# and run -  `docker build . -t hello-front`  - in bash to init image
# `docker run -it hello-front bash` - to create a container and entry the bash

# option 2
# `docker build . -t hello-front` - build the image
# `docker run -p 5001:3000 hello-front` - the app will be available in http://localhost:5001

# QA

1. `node:20: failed to resolve source metadata for docker.io/library/node:20: unexpected status from HEAD request to https://docker.m.daocloud.io/v2/library/node/manifests/20?ns=docker.io: 401 Unauthorized`
   
确认端口是否正确,或者让docker走代理

```
curl -I -x http://127.0.0.1:7890 https://www.google.com
```

需要先`docker pull node:20`这个命令，再Build docker

```
{
  "builder": {
    "gc": {
      "defaultKeepStorage": "20GB",
      "enabled": true
    }
  },
  "experimental": false,
  "proxies": {
    "default": {
      "httpProxy": "http://127.0.0.1:7890",
      "httpsProxy": "http://127.0.0.1:7890",
      "noProxy": "localhost,127.0.0.1"
    }
  },
  "registry-mirrors": null
}
```