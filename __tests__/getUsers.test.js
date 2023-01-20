import supertest from 'supertest';
import { createNewServer } from '../src/server/listenSingleServer.js';
import { DataStorage } from '../src/components/users/dataStorage.js';

const dataStorage = new DataStorage();
const TEST_PORT = 8080;
const request = supertest(createNewServer(TEST_PORT));

beforeEach(async () => {
  await dataStorage.clear();
});

describe('GET /api/users', () => {
  it('empty body', async () => {
    const response = await request.get('/api/users');

    expect(response.body).toEqual([]);
  });
});
