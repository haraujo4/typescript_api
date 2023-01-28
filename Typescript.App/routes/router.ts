import UserController from "../controllers/UserController";
import { Router } from "express";


class Routes{
    static getRoutes() {
        throw new Error('Method not implemented.');
    }
    private readonly _userController = new UserController();

    getRoutes(): Router {
        const router = Router();
        router.get("/users", this._userController.getUsers);
        router.get("/users/:id", this._userController.getUserById);
        router.get("/users/email/:email", this._userController.getUserByEmail);
        router.post("/users", this._userController.createUser);
        router.put("/users", this._userController.updateUser);
        router.delete("/users/:id", this._userController.deleteUser);
        return router;
    }

    
}

export default Routes;