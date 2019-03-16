import csshook from 'css-modules-require-hook/preset';
import assethook from 'asset-require-hook';

import Koa from 'koa';
import ReactDOM from 'react-dom';
import routes from '../src/routes';

const app = new Koa();



app.use(async (ctx) => {
  const { url } = ctx.req.url;
  console.log(url);
})

app.listen(8001);
