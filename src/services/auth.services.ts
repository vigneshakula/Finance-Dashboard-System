import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import  User  from '../models/user';

const JWT_SECRET = process.env.JWT_SECRET as string;
const SALT_ROUNDS = Number(process.env.BCRYPT_SALT_ROUNDS) || 10;

export const signup = async (data: {
    name: string;
    email: string;
    password: string;
    role?:string
    }) => {
    const { name, email, password,role } = data;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role: role||"viewer"
        });

    
    return {
    message: 'User registered successfully'
    };
};


export const signin = async (data: {
    email: string;
    password: string;
    }) => {
    const { email, password } = data;

    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Invalid credentials');
    }

    
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error('Invalid credentials');
    }

    
    const token = jwt.sign(
        {
        id: user._id,
        role: user.role,
        },
        JWT_SECRET,
        { expiresIn: '1d' }
    );
    
    return {
        token
    };
};