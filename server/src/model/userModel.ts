import mongoose from 'mongoose';

export interface UserType {
    name: string;
    email: string;
    phoneNo:string;
    password: string;
    // Add other fields as needed (e.g., role, profile picture)
  }
  

const userSchema = new mongoose.Schema<UserType>({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide an email address'],
    unique: true,
    trim: true,
  },
  phoneNo: {
    type: String,
    required: [true, 'Please provide an email address'],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minLength: [6, 'Password must be at least 6 characters'],
  },
  // Add other fields as needed (e.g., role, profile picture)
});

export const userModel = mongoose.model<UserType>('User', userSchema);
