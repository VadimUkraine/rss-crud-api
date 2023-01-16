import { MISSING_REQUIRED_FIELDS, WRONG_FIELDS_DATA } from '../errors/constants.js';

const defaultFields = ['username', 'age', 'hobbies'];

const isString = data => typeof data === 'string';

const isNumber = data => typeof data === 'number';

const isArrayOfStrings = data => Array.isArray(data) 
  && data.every(item => isString(item));

const defaultFieldsTypes = {
  ['username']: isString,
  ['age']: isNumber,
  ['hobbies']: isArrayOfStrings,
};

const validateUserFieldsContent = userData => {
  let isWrongFieldsData = false; 

  defaultFields.forEach(
    field => {
      const validateMetod = defaultFieldsTypes[field];

      if (validateMetod && !validateMetod(userData[field])) {
        isWrongFieldsData = true;
      }
    }
  );

  if (isWrongFieldsData) {
    throw new Error(WRONG_FIELDS_DATA);
  }

}

const validateUser = userData => {
  const newUserFields = Object.keys(userData);
  let isMissingRequiredFields = false;
  
  defaultFields.forEach(
    item => {
      if (!newUserFields.includes(item)) {
        isMissingRequiredFields = true;
      }
    }
  );

  if (isMissingRequiredFields) {
    throw new Error(MISSING_REQUIRED_FIELDS);
  }
  
  validateUserFieldsContent(userData);
}

export default validateUser;
