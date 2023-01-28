import express from 'express';
import Routes from './routes/router';


class Configuration {
    public static app: express.Application = express();
    public static port: number = 3000;

    public static init() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    public static start() {
        this.app.listen(this.port, () => {
            console.log(`Server started on port ${this.port}`);
        });
    }

    public static router() {
        this.app.use('/', new Routes().getRoutes());
    }
}

export default Configuration;