require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hidden swift trip lizard rice mad honey hidden arctic slot genre'; 
let testAccounts = [
"0xa1c4f7cc3c7e8a74b3767c133cefc26947ea146c34e919bc4ac93734e3bc26cf",
"0xbcc017916ae3e77da84c4e230d7383d7cc2dcb373fdb8c7ff62dbbebcc8edc2a",
"0x46b398b2b3979cd0fda5df9183996635dcdf246e5bd755bd1f0f5f71e6978bf6",
"0x5fae3a8e05eb2e8500288147bca96b9fdf2356662ba51effd9842d674ad3413a",
"0x17e00ef7c24ae0690599a2008fb25380cc36f8378e20729964a5c3d772dc2763",
"0x50eed7c2290f81d060fc72cb744ff02fce6b9ffa03d043f583ac0f73bc39bc49",
"0x8da8433f3fbce962671d0ca55b5c088a4ccb8e27e2ff66fd50977469a7daaefd",
"0xf14678cc56e63f05577faa09f690e3f4b9a03b2f9bad2cb551e12537e3d043b2",
"0x440c4863c3a155f7bef81010ec49420ff7da3e7990b52247280a3d1e70eb2b9c",
"0x892e39e8d2012338fcf3e66cb2e744905cae0eba032d7451dcf549d60457357a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


