import { DataStorage } from './dataStorage.js';

const dataStorage = new DataStorage();

class UserRepository {
 
    constructor(dataStorage) {
        this.dataStorage = dataStorage;
    }

    getAll = async () => await this.dataStorage.getAllUsers();

    create = async (userData) => await this.dataStorage.createUser(userData);

    remove = async (id) => await this.dataStorage.removeUser(id);

    findById = async (id) => await this.dataStorage.getUser(id);

    update = async (id, userData) => await this.dataStorage.updateUser(id, userData);

  
}

const userRepository = new UserRepository(dataStorage);

export { userRepository };

