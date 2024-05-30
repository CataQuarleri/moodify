import mongoose from 'mongoose';
import Users from '../models/userSchema';

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await Users.login(email, password);
    res.status(200).json({ email });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message });
  }
};

const userSignup = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const newUser = await Users.signup({ userName, email, password });
    res.status(200).json({ userName, email, password });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message });
  }
};

export { userLogin, userSignup };
