import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import HttpException from './http.exception';

dotenv.config();

const SECRET = process.env.JWT_SECRET || "asdadd";

type Payload = {
  id: number,
  email: string,
}

const verifyJWT = async (token: string): Promise<TUser> => {
	const decoded = jwt.verify(token, SECRET) as Payload;
	return userModel.getByEmail(decoded.email); 
}

export default { generateJWT, verifyJWT }