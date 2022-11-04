import { Pool, RowDataPacket } from 'mysql2/promise';
import { User } from '../interfaces';

export default class UserModel {
	public connection: Pool;

	constructor(connection: Pool) {
		this.connection = connection;
	}

	public async getAll(): Promise<User[]> {
		const result = await this.connection
			.execute('SELECT * FROM users');
		const [rows] = result;
		return rows as User[];
	}

	async getByEmailAndPassword(email: string, password: string): Promise<User> {
		const [[row]] = await this.connection.execute<(User & RowDataPacket)[]>(
			`SELECT * FROM users WHERE email = ? AND password = ?`, [email, password]);
		return row;
	}

	async getByEmail(email: string): Promise<User> {
		const [[row]] = await this.connection.execute<(User & RowDataPacket)[]>(
			`SELECT * FROM users WHERE email = ?`, [email]);
		return row;
	}
}