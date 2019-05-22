import Home from '../components/home';
import Blog from '../components/blog';

const routes = [
  {
    path: '/',
    title:'首页',
    component: Home,
    exact: true
  },
  {
    path: '/blog',
    title:'博客',
    component: Blog
  },
]
export default routes;
