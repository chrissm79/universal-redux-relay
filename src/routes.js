import Hello from './components/Hello';
import TodoApp from './components/TodoApp';
import TodoList from './components/TodoList';
import ViewerQueries from './queries/ViewerQueries';

export default () => {
  return [
    {
      path: '/',
      component: Hello,
    },
    {
        path: '/todo',
        component: TodoApp,
        queries: ViewerQueries,
        indexRoute: {
            component: TodoList,
            queries: ViewerQueries,
            prepareParams: () => ({status: 'any'}),
        },
        childRoutes: [
            {
                path: ':status',
                component: TodoList,
                queries: ViewerQueries,
            },
        ],
    },
  ];
};
