const hre = require("hardhat");

const TOKEN_NAME = "nFactorial Incubator";
const SYMBOL_NAME = "N17R";

async function main() {
  const TokenContract = await hre.ethers.getContractFactory("ERC20");
  const token = await TokenContract.deploy(TOKEN_NAME, SYMBOL_NAME);

  await token.deployed();

  const name = await token.name();
  const symbol = await token.symbol();

  console.log("Token contract deployed to:", token.address);
  console.log("Token name:", name);
  console.log("Symbol name:", symbol);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
