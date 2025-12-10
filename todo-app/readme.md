
1. 进入根目录文件
2. 如果是初次运行的话，走这个命令`docker compose -f 'todo-app/docker-compose.dev.yml' up -d --build`
3. 如果运行过了，直接在docker了运行容器就可以了，不需要多次运行，因为是在创建容器

all done. 

`todo-app/todo-backend/.env` env file 

```js
REDIS_URL=redis://localhost:3490 
MONGO_URL=mongodb://root:example@localhost:3456/the_database?authSource=admin
```