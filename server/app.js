import csshook from 'css-modules-require-hook/preset';
import assethook from 'asset-require-hook';

import React from 'react';
import Koa from 'koa';
import ReactDOM from 'react-dom';
import { StaticRouter, Route } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import routes from '../src/routes';
import koaStatic from 'koa-static';
import fs from 'fs';
import path from 'path';
import Navbar from '../src/components/navbar';
import Footer from '../src/components/footer';


const getMatched = (path) => routes.filter(route => route.path === path);
// const html = fs.readFileSync('../index.html', { encoding: 'utf-8' });
const html = `
<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>__SSR_TITLE__</title>
</head>
<body>
  <div id="app">__SSR_CONTENT__</div>
  <script src="/vendor.min.js"></script>
  <script src="/app.min.js"></script>
  <noscript>启用浏览器的JavaScript来浏览本站</noscript>
</body>
</html>
`

const matchRoute = path => {
  for (let [key, item] of routes.entries()) {
    if (item.path === path) {
      return item;
    }
  }
  return false;
}

const app = new Koa();
app.use(async (ctx, next) => {
  const { path } = ctx.request;
  const route = matchRoute(path);
  if (!route) {
    return next();
  }
  const content = renderToString(
    <div>
      <StaticRouter location={path}>
        <div>
          <Navbar />
          {
            routes.map((route, index) => (
              <Route key={index + '-route'} path={route.path} component={route.component} exact></Route>
            ))
          }
          <Footer />
        </div>
      </StaticRouter>
    </div>
  );
  ctx.body = html.replace('__SSR_TITLE__', route.title).replace('__SSR_CONTENT__', content);
});

app.use(koaStatic(path.resolve('../dist')));
app.listen(8001);
