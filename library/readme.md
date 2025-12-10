# library folder readme

通过每个文件夹下的dockerfile的前缀，不难看出，分为开发和生产的文件。
根目录文件下有docker-compose文件，这个文件用于操作执行根目录下的子文件中的dockerfile
减少分步操作，一次执行多次命令。

根目录&library-backend-mongodb 需要新增.env文件

```js
MONGODB_URI='your mongodb url link'
JWT_SECRET='some string'
```

1. 进入根目录
2. run this command

```js
docker compose -f 'docker-compose.dev.yml' up -d --build
```

3. open http://localhost:8080/ , to checkout page. 

其他问题：

1. 没有数据也有可能是mongodb inactive了，重新激活下
2. 没有数据的话记得把代理切到新加坡，问题排查主要就是mongodb timeout
3. 如果需要添加用户，就把后端服务跑起来，在graphql界面上，把用户添加进去，然后就可以测试登录了。
   