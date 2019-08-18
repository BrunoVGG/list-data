import ListData from '@/components/ListData/';

const routes = [
    {
      path: '/',
      redirect: { name: 'transcriptions' }
    },
    {
      path: '/transcriptions',
      component: ListData,
      name: 'transcriptions'
    }
  ]
  
  export default routes
  