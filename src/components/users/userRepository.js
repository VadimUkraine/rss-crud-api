import cluster from 'node:cluster';
import { User } from './userEntity';
// import { IDataStorage } from '../../framework/data-storage/IDataStorage';
// import { InMemoryDatabase } from '../../framework/data-storage/InMemoryDatabase';
// import { MasterProcessDatabase } from '../../framework/data-storage/MasterProcessDatabase';
import { UpdateUserDto } from './userDto';

import { DataStorage } from './dataStorage.js';

const dataStorage = new DataStorage();

class UserRepository {
 
    constructor(dataStorage) {
        this.dataStorage = dataStorage;
    }

    getAll = async () => await this.dataStorage.getAll();
  
}



const userRepository = new UserRepository(dataStorage);

export { userRepository, UserRepository };
