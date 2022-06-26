<img src=".github/n17r.png" alt="Foundry logo" align="right" width="120" />

# N17R - Web3, Day 1

This repo teaches you a basic use of `hardhat` for smart contracts development. We are going to create a simple implementation of `ERC20` standard, test it and deploy to testnet.

## Setup

This project was bootstrapped using `npx hardhat init` CLI tool. Please refer to [this page](https://hardhat.org/tutorial/creating-a-new-hardhat-project) for more information.

### Install

```bash
git clone https://github.com/ironsoul0/n17r-web3-day1
cd n17r-web3-day1
yarn
```

### Scripts

All scripts that you can use are defined in `package.json` under `scripts`. Let's go through each of them.

1. Run local `hardhat` chain for deploying smart contracts.

```bash
yarn chain
```

2. Deploy smart contracts to local chain. This requires you to have an active instance of local chain running. Refer to `scripts/deploy.js` file for implementation.

```bash
yarn deploy
```

3. Run tests. No need for local chain running. Refer to `test/erc20.js` for implementation details.

```bash
yarn test
```

4. You can also deploy to Ethereum Rinkeby testnet by running the following command (advanced):

```bash
yarn deploy --network rinkeby
```

This will require you to create `.env` file inside your root folder with the following environment variables: `RINKEBY_URL` pointing to your Infura node, `PRIVATE_KEY` of your account.

### Links

Please refer to these links for further understanding of Smart Contracts development.

- [Solidity by Example](https://solidity-by-example.org/)
- [CryptoZombies](https://cryptozombies.io/)
- [OpenZeppelin Smart Contracts](https://docs.openzeppelin.com/contracts/4.x/)

