import Home from '../components/home';
import Blog from '../components/blog';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/blog',
    component: Blog
  },
]
export default routes;
