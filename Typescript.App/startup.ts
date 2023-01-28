import Configuration from "./configuration";


class Startup{
    public static main(): number {
        Configuration.init();
        Configuration.start();
        Configuration.router();
        return 0;
    }
}

Startup.main();