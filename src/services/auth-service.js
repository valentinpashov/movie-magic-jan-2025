import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET =process.env.JWT_SECRET | 'BASICSECRET';   //Пътят до SECRET-a

export default {
  register(userData) {  //Свързано с auth-controller.js //! Register
    return User.create(userData);
  },
  async login(email, password) {       //Свързано с auth-controller.js //! Login
    const user = await User.findOne({ email }); //Взимаме данните на user-a

    //Check user exists
    if (!user) {
      throw new Error("Invalid email or password!");
    }

    //Check password is correct
    const isValid = await bcrypt.compare(password, user.password);
    if(!isValid){
        throw new Error("Invalid email or password!");
    }

    //Generate token
    const payload = {
        id: user.id,
        email: user.email,
    };
    //TODO: use async option
    const token = jwt.sign(payload, SECRET, {expiresIn:'2h'});
  
    return token;
  },
};
