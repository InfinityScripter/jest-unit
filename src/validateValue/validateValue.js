const validateValue = (value) => {
  if (value < 0 || value > 100) {
   return false;  //if value is not between 0 and 100, return false

  }
  else if (isNaN(value)) {
    return false;  //if value is not a number, return false
  }
  return true;  //if value is a number between 0 and 100, return true
}

module.exports = validateValue; //export function validateValue
