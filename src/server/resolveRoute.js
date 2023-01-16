import { IncomingMessage } from 'node:http';
import { routes } from './routes.js';
import { ROUTE_NOT_FOUND } from '../errors/constants.js';

const getRawParams = (url, route) => {
  const paramsString = url.replace(route.path, '');
  const isParamsStringEmpty = paramsString === '';

  if (isParamsStringEmpty) {
    return [];
  }

  const rawParams = paramsString.split('/');

  return rawParams;
};

const parseParams = (url, route) => {
  const rawParams = getRawParams(url, route);

  const params = {};

  route.params.forEach((paramName, index) => {
    params[paramName] = rawParams[index];
  });

  return params;
};

const findRoute = (
  httpMethod,
  url
) => {
  const route = routes.find(elem => {
    const isMetodExist = elem.method === httpMethod;
    const isUrlExist = url.includes(elem.path);
    const rawParams = getRawParams(url, elem);
    const rawParamsLength = rawParams.length;
    const isParamsLengthDifferent = rawParamsLength !== elem.params.length;

    if (!isMetodExist || !isUrlExist || isParamsLengthDifferent) {
      return false;
    }

    return true;
    
  });

  return route;
};

const resolveRoute = async (request = IncomingMessage) => {
  const url = request.url?.toLowerCase() ?? '';
  const httpMethod = request.method?.toUpperCase();
  const route = findRoute(httpMethod, url);

  if (!route) {
    throw new Error(ROUTE_NOT_FOUND);
  }

  const params = parseParams(url, route);
  
  const resolvedRoute = {
    route,
    params,
  };


  return resolvedRoute;
};

export { resolveRoute };
