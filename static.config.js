import axios from 'axios'

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/work',
        component: 'src/containers/Work',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
