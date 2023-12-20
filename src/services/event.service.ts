import Web3Service from './web3.service';
import config from '../config/env';
import logger from '../utils/logger';
import blockModel from '../model/block.model';

class EventService {
    private blockNumber: number | undefined = config.blockNumber;

    public async addWallet() {
        let currentBlock = await Web3Service.getNetworkCurrentBlock();
        currentBlock = Number(currentBlock);

        let fromBlock: number = await this.getBlockNumber();

        fromBlock = fromBlock > 0 ? fromBlock : this.blockNumber;
        fromBlock = Number(fromBlock);

        let toBlock = fromBlock + 1000;
        if (toBlock >= currentBlock) toBlock = currentBlock;

        await blockModel.findOneAndUpdate(
            { latestBlock: fromBlock },
            { latestBlock: toBlock },
            {
                new: true,
                upsert: true,
            },
        );
        logger.info({ currentBlock });

        if (fromBlock >= currentBlock) { return logger.error('\n No more blocks found \n'); }
        const event: any = await Web3Service.getAddWalletEvents(
            'WalletAdded',
            fromBlock,
            toBlock,
        );
        logger.info({ event });

        return currentBlock;
    }

    public async getBlockNumber(): Promise<any> {
        const getLatestBlock: any = await blockModel.find();

        if (getLatestBlock.length < 1) {
            await blockModel.create({ latestBlock: this.blockNumber });

            return this.blockNumber;
        }

        return getLatestBlock[0].latestBlock;
    }
}

export default new EventService();
