import { User } from "../interfaces";
import connection from "../models/connection";
import UserModel from "../models/UserModel";

export default class UserService {
	public model: UserModel;

	constructor() {
		this.model = new UserModel(connection);
	}

	public async getAll(): Promise<User[]> {
		const books = await this.model.getAll();
		return books;
	}
}