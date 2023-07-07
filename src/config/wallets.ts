import { InjectedConnector } from "@web3-react/injected-connector";

export const ChainId = {
  ETHEREUM: 1,
  BSC: 56,
  BSC_TESTNET: 97,
};

const supportedChainIds = Object.values(ChainId);

export const injected = new InjectedConnector({
  supportedChainIds,
});
