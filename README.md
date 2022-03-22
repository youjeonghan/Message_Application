# Message_Application
- koa와 PostgreSQL을 사용해 만든 간단한 메모 Application입니다.
- ORM으로 sequelize를 사용했습니다.
- 회원가입과 로그인에 passport-local을 사용했습니다.

[API 명세서](https://www.postman.com/power-egg/workspace/publicworkspace/collection/12433390-7cb64de7-bb65-4f05-9fac-3a6ed3315230?action=share&creator=12433390)

<br>

## Dependency
- node 16.13.0
- koa 2.13.4
- PostgreSQL 14.2
```shell
cd ./server
npm install
```

<br>

## Environments
```shell
cd ./server
touch .env
```
```python
# .env 파일 내용
# DB 상황에 따라 다른 값일 수 있습니다.
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=postgres
DB_USER=postgres
DB_PASSWORD=0000
```

<br>

## Commands
```shell
cd ./server
npm install
npm start
```