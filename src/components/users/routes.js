import * as userControllers from './controllers.js';

const userRoutes = [
  {
    path: '/api/users',
    method: 'GET',
    handler: userControllers.get,
    params: [],
  },
  {
    path: '/api/users/',
    method: 'GET',
    handler: userControllers.getUser,
    params: ['id'],
  },
  {
    path: '/api/users',
    method: 'POST',
    handler: userControllers.create,
    params: [],
  },
  {
    path: '/api/users/',
    method: 'PUT',
    handler: userControllers.update,
    params: ['id'],
  },
  {
    path: '/api/users/',
    method: 'DELETE',
    handler: userControllers.remove,
    params: ['id'],
  },
];

export { userRoutes };

