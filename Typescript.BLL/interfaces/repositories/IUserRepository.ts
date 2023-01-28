import UserDTO from "../../models/DTO/UserDTO";


interface IUserRepository {
    getUsers(): Promise<UserDTO[]>;
    getUserById(id: number): Promise<UserDTO>;
    getUserByEmail(email: string): Promise<UserDTO>;
    createUser(user: UserDTO): Promise<UserDTO>;
    updateUser(user: UserDTO): Promise<UserDTO>;
    deleteUser(id: number): Promise<UserDTO>;
}

export default IUserRepository;