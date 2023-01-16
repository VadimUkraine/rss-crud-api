import { ServerResponse } from 'http';

const handleResponse = (response = ServerResponse, responseData) => {
  const bodySerialized = JSON.stringify(responseData.data);

    response
      .writeHead(responseData.status, {
        'Content-Type': 'application/json'
      })
      .end(bodySerialized);
};

export { handleResponse };
