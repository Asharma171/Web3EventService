export const WALLETLEDGER:any = [{ inputs: [], stateMutability: 'nonpayable', type: 'constructor' }, {
    anonymous: false,
    inputs: [{
        indexed: true, internalType: 'address', name: 'wallet', type: 'address',
    }],
    name: 'WalletAdded',
    type: 'event',
}, {
    inputs: [{ internalType: 'address', name: '_wallet', type: 'address' }],
    name: 'addWallet',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
}, {
    inputs: [{ internalType: 'address', name: '_wallet', type: 'address' }],
    name: 'isWalletListed',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
}, {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
}];
