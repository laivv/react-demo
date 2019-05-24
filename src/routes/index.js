import Home from '../components/home';
import Blog from '../components/blog';
import Message from '../components/message';

const routes = [
  {
    path: '/',
    title:'首页',
    component: Home,
  },
  {
    path: '/articles',
    title:'归档',
    component: Blog
  },
  {
    path: '/message',
    title:'留言',
    component: Message
  },
]
export default routes;
