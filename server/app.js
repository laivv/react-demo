import csshook from 'css-modules-require-hook/preset';
import assethook from 'asset-require-hook';

import React from 'react';
import Koa from 'koa';
import ReactDOM from 'react-dom';
import { StaticRouter ,Route} from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import routes from '../src/routes';



const getMatched = (path) =>routes.filter(route=>route.path === path)

const app = new Koa();
app.use(async (ctx) => {
  const { path } = ctx.request;
  const str = renderToString(
    <StaticRouter location={path}>
    <div>
        {
          routes.map((route, index) => (
            <Route key={index + '-route'} path={route.path} component={route.component} exact={route.exact || false}></Route>
          ))
        }
    </div>

    </StaticRouter>
  );
  ctx.body = str;
})
app.listen(8001);
