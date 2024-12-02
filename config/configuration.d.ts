declare const _default: () => {
    port: number;
    frontendURL: string;
    fileLocation: string;
    database: {
        host: string;
        port: number;
        name: string;
        username: string;
        password: string;
    };
    jwt: {
        secret: string;
        duration: string;
        refreshSecret: string;
        refreshDuration: string;
    };
    email: {
        service: string;
        email: string;
        password: string;
    };
};
export default _default;
