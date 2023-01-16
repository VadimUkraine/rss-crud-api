import { IncomingMessage } from 'http';
import { resolveRoute } from './resolveRoute.js';
import getErrorResponseData from '../errors/getErrorResponseData.js';

const resolveBody = async (request = IncomingMessage) => {
  const buffers = [];

  // /* eslint-disable no-restricted-syntax */
  for await (const chunk of request) {
    buffers.push(chunk);
  }

  const rawBody = Buffer.concat(buffers);

  if (rawBody.length === 0) {
    return {};
  }

  const body = JSON.parse(rawBody.toString());

  return body;
};


const handleRequest = async (request = IncomingMessage) => {
  try {
    const resolvedRoute = await resolveRoute(request);
    const action = resolvedRoute.route.handler;
    const body = await resolveBody(request);
    const model = {
      ...body,
      ...resolvedRoute.params,
    };

    const responseData = await action(model);

    return responseData;
  } catch (error) {
    const errorResponse = getErrorResponseData(error);

    if (!errorResponse) {
      throw error;
    }

    return errorResponse;
  }
};

export default handleRequest;
