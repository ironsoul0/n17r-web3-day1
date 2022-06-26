const { ethers } = require("ethers");

require("@nomiclabs/hardhat-waffle");
require("dotenv/config");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  defaultNetwork: "localhost",
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_URL || "",
      accounts: [process.env.PRIVATE_KEY || ethers.constants.HashZero],
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY || "",
  },
};
