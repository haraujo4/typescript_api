import IUserRepository from "../../Typescript.BLL/interfaces/repositories/IUserRepository";
import UserDTO from "../../Typescript.BLL/models/DTO/UserDTO";
import Context from "../Context/DataContext";



class UserRepository implements IUserRepository {

    private readonly _context = new Context();

    getUsers(): Promise<UserDTO[]> {
        return new Promise<UserDTO[]>((resolve, reject) => {
            resolve(this._context.user);
        });
    }
    getUserById(id: number): Promise<UserDTO> {
        return new Promise<UserDTO>((resolve, reject) => {
            const user = this._context.user.find((user) => user.id === id);
            resolve(user);
        });
    }
    getUserByEmail(email: string): Promise<UserDTO> {
        return new Promise<UserDTO>((resolve, reject) => {
            const user = this._context.user.find((user) => user.email === email);
            resolve(user);
        });
    }
    createUser(user: UserDTO): Promise<UserDTO> {
        return new Promise<UserDTO>((resolve, reject) => {
            this._context.user.push(user);
            resolve(user);
        });
    }
    updateUser(user: UserDTO): Promise<UserDTO> {
        return new Promise<UserDTO>((resolve, reject) => {
            const index = this._context.user.findIndex((u) => u.id === user.id);
            this._context.user[index] = user;
            resolve(user);
        });
    }
    deleteUser(id: number): Promise<UserDTO> {
        return new Promise<UserDTO>((resolve, reject) => {
            const index = this._context.user.findIndex((user) => user.id === id);
            const user = this._context.user[index];
            this._context.user.splice(index, 1);
            resolve(user);
        });
    }
}

export default UserRepository;