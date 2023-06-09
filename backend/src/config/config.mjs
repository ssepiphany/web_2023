import * as dotenv from 'dotenv'

dotenv.config();

const config = {
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET
}

export default config;