import bcrypt from 'bcrypt';

export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(`Error al encriptar la contraseña: ${error.message}`.red.underline.bold);
  }
};

export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

export const hashAnswer = async (answer) => {
  const salt = await bcrypt.genSalt(10);
  const hashedAnswer = await bcrypt.hash(answer, salt);
  return hashedAnswer;
};

export const compareAnswer = async (answer, hashedAnswer) => {
  return bcrypt.compare(answer, hashedAnswer);
};

