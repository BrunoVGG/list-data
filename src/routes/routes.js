import ListData from '@/components/ListData/';

const routes = [
    {
      path: '/',
      redirect: { name: 'list-data' }
    },
    {
      path: '/list-data',
      component: ListData,
      name: 'list-data'
    }
  ]
  
  export default routes
  