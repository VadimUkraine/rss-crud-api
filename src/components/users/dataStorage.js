import { v4 as uuidv4 } from 'uuid';

class DataStorage {
  
  constructor() {
    this.items = [];
  }

  getAllUsers = async() => {
    return this.items;
  }

  createUser = async (userData) => {
    const id = uuidv4();

    const newUser = { ...userData, id };
    this.items.push(newUser);

    return newUser;
  }

  getUser = async(id) => {
    const user = this.items.find(item => item.id === id);
    return user;
  }

  removeUser = async(id) => {
    this.items = this.items.filter(item => item.id !== id);

    return true;
  }

  updateUser = async(id, userData) => {
    this.items = this.items.map(item => {
      if (item.id === id) {
        return userData;
      }

      return item;
    });

    return userData;
  }
}

export { DataStorage };
