import * as dotenv from 'dotenv';

dotenv.config();

interface IConfig {
    port: string | number;
    database: {
        MONGODB_URI: string;
        MONGODB_DB_MAIN: string;
    };
    secret: string;
    project: {
        name: string;
        logLevel: string;
    },
    addressList: {
        walletLedgerAddress: string;
    }
    blockNumber: number;
    RPC: {
        PROVIDER: string
    }
}

const NODE_ENV: string = process.env.NODE_ENV || 'development';

const development: IConfig = {
    port: process.env.PORT || 3000,
    database: {
        MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/',
        MONGODB_DB_MAIN: process.env.MONGODB_DB_MAIN || 'users_db',
    },
    secret: process.env.SECRET || '@QEGTUI',
    project: {
        name: process.env.PROJECT_NAME,
        logLevel: process.env.LOG_LEVEL,
    },
    addressList: {
        walletLedgerAddress: process.env.WALLET_LEDGER_ADDRESS || '',
    },
    blockNumber: Number(process.env.BLOCK_NUMBER),
    RPC: {
        PROVIDER: process.env.RPC_PROVIDER || '',
    },
};

const production: IConfig = {
    port: process.env.PORT || 3000,
    database: {
        MONGODB_URI: process.env.MONGODB_URI || 'mongodb://production_uri/',
        MONGODB_DB_MAIN: process.env.MONGODB_DB_MAIN || 'users_db',
    },
    secret: process.env.SECRET || '@QEGTUI',
    project: {
        name: process.env.PROJECT_NAME,
        logLevel: process.env.LOG_LEVEL,
    },
    addressList: {
        walletLedgerAddress: process.env.WALLET_LEDGER_ADDRESS || '',
    },
    blockNumber: Number(process.env.BLOCK_NUMBER),
    RPC: {
        PROVIDER: process.env.RPC_PROVIDER || '',
    },
};

const test: IConfig = {
    port: process.env.PORT || 3000,
    database: {
        MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017',
        MONGODB_DB_MAIN: 'test_users_db',
    },
    secret: process.env.SECRET || '@QEGTUI',
    project: {
        name: process.env.PROJECT_NAME,
        logLevel: process.env.LOG_LEVEL,
    },
    addressList: {
        walletLedgerAddress: process.env.WALLET_LEDGER_ADDRESS || '',
    },
    blockNumber: Number(process.env.BLOCK_NUMBER),
    RPC: {
        PROVIDER: process.env.RPC_PROVIDER || '',
    },
};

const config: { [name: string]: IConfig } = {
    test,
    development,
    production,
};

export default config[NODE_ENV];
