import { userRepository } from './repository.js';
import { responseHandler } from './responseHandler.js';
import validateUuid from '../../validations/validateUuid.js';
import validateEmptyUser from '../../validations/validateEmptyUser.js';
import validateUser from '../../validations/validateUser.js';
import normalizeUserFields from '../../validations/normalizeUserFields.js';

const get = async () => {
  const users = await userRepository.getAll();

  return responseHandler.getAllResponse(users);
};

const create = async (userData) => {
  validateUser(userData);

  const newUser = normalizeUserFields(userData);
  const user = await userRepository.create(newUser);
  const response = responseHandler.getCreateResponse(user);

  return response;
};

const remove = async ({ id }) => {
  validateUuid(id);

  const user = await userRepository.findById(id);

  validateEmptyUser(user);

  await userRepository.remove(id);
  const response = responseHandler.getDeleteResponse();

  return response;
};

const update = async (userData) => {
  const { id } = userData;
  validateUuid(id);

  const updatedUser = normalizeUserFields(userData, 'id');
  const user = await userRepository.update(id, updatedUser);

  validateEmptyUser(user);

  const response = responseHandler.getUpdateResponse(user);

  return response;
};

const getUser = async ({ id })  => {
  validateUuid(id);

  const user = await userRepository.findById(id);

  validateEmptyUser(user);

  const response = responseHandler.getUserResponse(user);

  return response;
};

export {
  get,
  getUser, 
  create, 
  update,
  remove,
};
