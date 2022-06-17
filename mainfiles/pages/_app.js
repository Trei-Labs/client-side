import '../styles/globals.css'
import fonts from '../styles/fonts.css'
import cards from '../styles/cards.css'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import Navbar from '../src/commons/Navbar';
import { binanceChain } from '../src/commons/CustomChains';
import { binanceTestChain } from '../src/commons/CustomChains';

const { chains, provider } = configureChains(
  [chain.mainnet,chain.ropsten, chain.polygon, chain.polygonMumbai,binanceChain, binanceTestChain],
  [
    alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider coolMode chains={chains}>
        <Navbar/>
  <Component {...pageProps} />
  </RainbowKitProvider>
  </WagmiConfig>
  )
}

export default MyApp
