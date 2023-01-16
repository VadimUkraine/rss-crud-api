import { USER_NOT_FOUND } from '../errors/constants.js';

const validateEmptyUser = user => {
  if (!user) {
    throw new Error(USER_NOT_FOUND);
  }
}

export default validateEmptyUser;
