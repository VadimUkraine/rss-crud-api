import { validate } from 'uuid';
import { INVALID_UUID } from '../errors/constants.js';

const validateUuid = id => {
  const isInvalidUuid = typeof id !== 'string' || !validate(id);

  if (isInvalidUuid) {
    throw new Error(INVALID_UUID);
  }
}

export default validateUuid;
