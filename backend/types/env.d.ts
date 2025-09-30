declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DATABASE_URL: string;
            PORT?: string;
            NODE_ENV?: string;
            EMAIL_USER?: string;
            EMAIL_PASS?: string;
            npm_package_version?: string;
        }
    }
}

export { };