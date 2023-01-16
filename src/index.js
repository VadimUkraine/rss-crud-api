import * as dotenv from 'dotenv';
import { env } from 'process';
import { listenSingleServer } from './server/listenSingleServer.js';

dotenv.config();

const port = parseInt(env.PORT);
const DEFAULT_PORT = '4000';

listenSingleServer(port || DEFAULT_PORT);
