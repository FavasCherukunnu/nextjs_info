import { UserType, userModel } from "../model/user.model";
import express from 'express'

export const userRouter = express.Router()


userRouter.post('/register',async (req, res) => {
    try {
      const { name, email, password,phoneNo }: UserType = req.body; // Destructure user data
  
      // Check for existing user
    //   const existingUser = await userModel.findOne({ $or:[{email},{phoneNo}] });
    //   if (existingUser) {
    //     return res.status(400).json({ message: 'Email or phone already exists ' });
    //   }
  
      // Hash password
    //   const salt = await bcrypt.genSalt(10);
    //   const hashedPassword = await bcrypt.hash(password, salt);
  
      // Create new user
      const newUser = new userModel({
        name,
        email,
        password,
      });
  
      const savedUser = await newUser.save();
  
      res.json({ message: 'User created successfully!', user: savedUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  })