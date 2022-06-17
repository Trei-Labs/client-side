export const binanceChain = {
    id: 56,
    name: 'Binance Smart Chain',
    network: 'Binance',
    iconUrl: 'https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=022',
    iconBackground: '#fff',
    nativeCurrency: {
      decimals: 18,
      name: 'Binance',
      symbol: 'BNB',
    },
    rpcUrls: {
      default: 'https://rpc-bsc.bnb48.club',
    },
    testnet: false,
  };

  export const binanceTestChain = {
    id: 97,
    name: 'Binance TestNet',
    network: 'Binance Testnet',
    iconUrl: 'https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=022',
    iconBackground: '#fff',
    nativeCurrency: {
      decimals: 18,
      name: 'Binance',
      symbol: 'BNB',
    },
    rpcUrls: {
      default: 'https://data-seed-prebsc-2-s1.binance.org:8545/',
    },
    testnet: true,
  };