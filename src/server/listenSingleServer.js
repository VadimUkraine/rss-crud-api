import { constants as httpStatus } from 'http2';
import { createServer, IncomingMessage, ServerResponse } from 'http';
import handleRequest from './handleRequest.js';
import { handleResponse } from './handleResponse.js';
// import responseHeaders from './response/response.json.header.js';
// import { INTERNAL_SERVER_ERROR } from './response/response.message.js';
// import * as logger from './handler/log.handler.js';
import { INTERNAL_SERVER_ERROR } from '../errors/constants.js';

const createNewServer = (port) => {
  const newServer = createServer(
    async (request = IncomingMessage, response = ServerResponse) => {
      console.log(`${request.method} request received on port ${port}`);

      try {
        const responseData = await handleRequest(request);

        handleResponse(response, responseData);
      } catch (error) {
        console.log('SHOW ERROR HERE **** listenSingleServer', error)
        response.writeHead(
          httpStatus.HTTP_STATUS_INTERNAL_SERVER_ERROR,
          { 'Content-Type': 'application/json' }
        );
        response.end(INTERNAL_SERVER_ERROR);
      }
    }
  );

  return newServer;
};

const listenSingleServer = (port) => {
  const appServer = createNewServer(port);

  appServer.listen(port, () => {
    console.log(`Server is running on PORT ${port}` );
  });
};

export { listenSingleServer };
