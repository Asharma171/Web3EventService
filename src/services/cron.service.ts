import * as cron from 'node-cron';
import EventService from './event.service';

class CronService {
    public addWalletEvent = async () => {
        cron.schedule('*/10 * * * * *', async () => {
            console.log('Fetching Events every 10 sec');
            await EventService.addWallet();
        });
    };
}

export default new CronService();
