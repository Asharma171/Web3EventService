import Web3 from 'web3';
import config from '../config/env';

import { WALLETLEDGER } from '../utils/abi/walletLedger.abi';
import logger from '../utils/logger';

class Web3Service {
    public maticProvider: any = config.RPC.PROVIDER;

    public walletContractAddress: string = config.addressList.walletLedgerAddress;

    public web3: Web3;

    public walletContract: any;

    constructor() {
        this.init();
    }

    /**
   * @function init
   * @returns web3, smartContract
   */
    private init() {
        this.initWeb3();
    }

    private initWeb3() {
        this.web3 = new Web3(this.maticProvider);
        this.walletContract = new this.web3.eth.Contract(WALLETLEDGER, this.walletContractAddress);
    }

    public async getAddWalletEvents(event: string, fromBlock: number, toBlock: number): Promise<any> {
        try {
            const data = await this.walletContract.getPastEvents(event, { fromBlock, toBlock });

            return data;
        } catch (error) {
            logger.error(error, 'Error in netowork getAddWalletEvents');
        }
    }

    public async getNetworkCurrentBlock(): Promise<any> {
        try {
            return await this.web3.eth.getBlockNumber();
        } catch (error) {
            logger.error(error, 'Error in netowork latest block number');
        }
    }
}

export default new Web3Service();
