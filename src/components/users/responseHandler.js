import { constants as httpStatus } from 'http2';

class UserResponse {
 
    getAllResponse = userData => {
      return {
        status: httpStatus.HTTP_STATUS_OK,
        data: userData,
      };
    };

    getCreateResponse = userData => {
      return {
        status: httpStatus.HTTP_STATUS_CREATED,
        data: userData,
      };
    };

    getDeleteResponse = () => {  
      return {
        status: httpStatus.HTTP_STATUS_NO_CONTENT,
        data: {},
      };
    };

    getUpdateResponse = userData => {
      return {
        status: httpStatus.HTTP_STATUS_OK,
        data: userData,
      };
    }

    getUserResponse = userData => {
      return {
        status: httpStatus.HTTP_STATUS_OK,
        data: userData,
      };

    }  
}

const responseHandler = new UserResponse();

export { responseHandler };

