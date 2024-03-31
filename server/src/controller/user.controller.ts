import { ZodIssue, z } from "zod";
import { UserType, userModel } from "../model/user.model";
import express from 'express'
import { flattenErrors } from "../utils/zodErrorValidation";

export const userRouter = express.Router()


userRouter.post('/register', async (req, res) => {
    try {
        const zvalidator = z.object({
            name: z.string().min(5).max(30),
            email: z.string().email(),
            phoneNo: z.string().superRefine(
                (value,context)=>{
                    const isDigit = /^\d+$/.test(value)
                    if(!isDigit || value.length>10 || value.length<10){
                        return context.addIssue({
                            message:'Not a valid phone number',
                            code:'custom'
                        })
                    }
                    
                }
            ),
            password: z.string().min(6)
        })

        const zdata = zvalidator.safeParse(req.body)

        if(zdata.success===true){
            return res.json({
                success:true,
                message:'User updated succesfully',
                data:zdata.data
            })
        }else{

            return res.json({
                success:false,
                message: 'Validation error',
                errors:flattenErrors(zdata)
                // user: savedUser
            });

        }

        // Check for existing user
        //   const existingUser = await userModel.findOne({ $or:[{email},{phoneNo}] });
        //   if (existingUser) {
        //     return res.status(400).json({ message: 'Email or phone already exists ' });
        //   }

        // Hash password
        //   const salt = await bcrypt.genSalt(10);
        //   const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        //   const newUser = new userModel({
        //     name,
        //     email,
        //     password,
        //   });

        //   const savedUser = await newUser.save();

        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
})