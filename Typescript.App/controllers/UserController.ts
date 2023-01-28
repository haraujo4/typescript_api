import UserDTO from "../../Typescript.BLL/models/DTO/UserDTO";
import UserRepository from "../../Typescript.DAL/Repositories/UserRepository";


class UserController{
    private _userRepository = new UserRepository();
    getUsers(): Promise<UserDTO[]> {
        return this._userRepository.getUsers();
    }
    getUserById(id: number): Promise<UserDTO> {
        return this._userRepository.getUserById(id);
    }
    getUserByEmail(email: string): Promise<UserDTO> {
        return this._userRepository.getUserByEmail(email);
    }
    createUser(user: UserDTO): Promise<UserDTO> {
        return this._userRepository.createUser(user);
    }
    updateUser(user: UserDTO): Promise<UserDTO> {
        return this._userRepository.updateUser(user);
    }
    deleteUser(id: number): Promise<UserDTO> {
        return this._userRepository.deleteUser(id);
    }
}

export default UserController;