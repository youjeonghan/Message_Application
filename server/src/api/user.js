const Router = require('koa-router');

const user = new Router();
const userController = require('../controller/user_controller');

user.post('/', userController.signUser);
user.post('/login', userController.login);

module.exports = user;
