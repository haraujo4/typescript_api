import  {v4 as uuidv4} from 'uuid';

class UserDTO {
    id: string;
    name: string;
    email: string;
    password: string;
    created_at: Date;
    updated_at: Date;

    constructor(name: string, email: string, password: string) {
        this.id = uuidv4();
        this.name = name;
        this.email = email;
        this.password = password;
        this.created_at = new Date();
        this.updated_at = new Date();
    }
}

export default UserDTO;
