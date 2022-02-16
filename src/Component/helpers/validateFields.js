const validateEmail = (email) => {
  const emailRegex = /\S+@\S+\.\S+/;
  const isValid = emailRegex.test(email);
  
  if (!isValid) return 'errorEmail';
  return 'readyToGo';
};

const validatePassword = (password) => {
  if(password.length < 6) return 'errorPassword';
  return 'readyToGo';
};

const validateFields = (email, password) => {
  if (!email || !password) return "errorFields";

  const isEmailValid = validateEmail(email);
  if (isEmailValid !== 'readyToGo') return isEmailValid;

  const isPasswordValid = validatePassword(password);
  return isPasswordValid;
};

export default validateFields;

