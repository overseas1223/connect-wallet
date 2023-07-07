import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import './App.css';
import { ChakraProvider, extendTheme  } from "@chakra-ui/react";
import Layout from "./components/Layout";
import ConnectButton from './components/ConnectButton';

function App() {
  function getLibrary(provider: any): Web3Provider {
    const library = new Web3Provider(
      provider,
      typeof provider.chainId === 'number'
        ? provider.chainId
        : typeof provider.chainId === 'string'
        ? parseInt(provider.chainId)
        : 'any'
    );
    library.pollingInterval = 15_000;
    return library;
  }

  const theme= extendTheme({
    fonts: {
      body: `'Poppins', sans-serif`,
    },
    fontSizes: {
      md: '14px',
    }
  })
  
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ChakraProvider theme={theme} >
        <Layout>
          <ConnectButton />
        </Layout>
      </ChakraProvider>
    </Web3ReactProvider>
  );
}

export default App;
