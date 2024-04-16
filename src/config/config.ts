import { config as conf } from "dotenv";
conf();

const _config={
    port:process.env.PORT,
    jwttoken:process.env.JWT_TOKEN,
};

export const config = Object.freeze(_config);