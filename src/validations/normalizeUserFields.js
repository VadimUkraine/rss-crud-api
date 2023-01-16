const defaultFields = ['username', 'age', 'hobbies'];

const normalizeUserFields = (userData, additionalField) => {
  const user = {};

  defaultFields.forEach(
    field => {
      if (userData[field]) {
        user[field]= userData[field];
      }
    }
  );

  if (additionalField) {
    user[additionalField]= userData[additionalField];
  }

  return user;
}

export default normalizeUserFields;
