import supertest from 'supertest';
import { createNewServer } from '../src/server/listenSingleServer.js';
import { DataStorage } from '../src/components/users/dataStorage.js';
import { DEFAULT_USERS } from './moks/users.js';
import { INVALID_UUID } from '../src/errors/constants.js';

const dataStorage = new DataStorage();
const TEST_PORT = 8080;
const request = supertest(createNewServer(TEST_PORT))

beforeEach(async () => {
  await dataStorage.clear();
});

describe('GET /api/users/:id', () => {
  it('status 404', async () => {
    await dataStorage.setData(DEFAULT_USERS);
    const response = await request.get(`/api/users/123`);

    expect(response.body.message).toContain(INVALID_UUID);
  }); 
  
});
