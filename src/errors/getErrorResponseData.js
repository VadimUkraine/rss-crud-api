import { constants as httpStatus } from 'http2';
import {
  INVALID_UUID,
  USER_NOT_FOUND,
  MISSING_REQUIRED_FIELDS,
  WRONG_FIELDS_DATA,
  ROUTE_NOT_FOUND,
} from '../errors/constants.js';

const errorResponse = {
  [INVALID_UUID]: {
    status: httpStatus.HTTP_STATUS_BAD_REQUEST,
    data: { message: INVALID_UUID },
  },
  [USER_NOT_FOUND]: {
    status: httpStatus.HTTP_STATUS_NOT_FOUND,
    data: { message: USER_NOT_FOUND },
  },
  [MISSING_REQUIRED_FIELDS]: {
    status: httpStatus.HTTP_STATUS_BAD_REQUEST,
    data: { message: MISSING_REQUIRED_FIELDS },
  },
  [WRONG_FIELDS_DATA]: {
    status: httpStatus.HTTP_STATUS_BAD_REQUEST,
    data: { message: WRONG_FIELDS_DATA },
  },
  [ROUTE_NOT_FOUND]: {
    status: httpStatus.HTTP_STATUS_NOT_FOUND,
    data: { message: ROUTE_NOT_FOUND },
  },  
};

const getErrorResponseData = error => {
  let response = null;

  if (!error || !(error instanceof Error)) {
    return response;
  }

  return errorResponse[error.message];
};

export default getErrorResponseData;
