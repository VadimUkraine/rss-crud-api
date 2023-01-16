import supertest from 'supertest';
import { createNewServer } from '../src/server/listenSingleServer.js';
import { DataStorage } from '../src/components/users/dataStorage.js';
import { INVALID_UUID } from '../src/errors/constants.js';

const dataStorage = new DataStorage();
const TEST_PORT = 8080;
const request = supertest(createNewServer(TEST_PORT));

beforeEach(async () => {
  await dataStorage.clear();
});

describe('DELETE /api/users/:id', () => {
  it('status 404', async () => {
    const response = await request.delete(
      `/api/users/123`
    );

    expect(response.body.message).toContain(INVALID_UUID);
  });
});
