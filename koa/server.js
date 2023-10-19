require('newrelic');

const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello Harry Kimpel';
});

app.listen(3000);