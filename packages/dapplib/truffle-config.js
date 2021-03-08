require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'grace casual flee seed edge rare remember exchange hockey arena outer swarm'; 
let testAccounts = [
"0xc71f7aa934287f498558335b48a9638e8299d706feece6a25c4a8b94b2430bc4",
"0x59969a8360f5f2551a6f26912451978984295d19521eca85fd98c366229e104e",
"0xbab14e6054eeecc499aeea33e64a69d35d9e61e76c2dcd8631ef3d2275c1b6a3",
"0x6f3215ab4a7bf57918a61115666d5093dd6017b7c5317a3c0b4385d77ffe4b1e",
"0xbe9b4bd8026dfbd781b634012ca1db76e0d67b1fde0cb1fd81f405b5e530b28c",
"0xcc7ddacac5f97c89d1313b1796f7c6e82c1fade2abf2084eb6271e0bf7cf66a1",
"0xd515d0e3d7be4405f4c0886f2878fdf83bca72230eee50de24c142c6e843be2d",
"0x805d1cec0e5812a50b9c9e1d01a108d01f50849f4df2146d0b1d0ac41a80ddb3",
"0x7e559d75c666820974a5de07951c330ac2662aabb003b69dafee8dd4ef833798",
"0xfe27519ce92656858c9cbab49e1f6e0299aea061bca990ddf8bc293b7ca25d4e"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

