const hre = require("hardhat");

const TOKEN_NAME = "nFactorial Incubator";
const SYMBOL_NAME = "N17R";

async function main() {
  const TOKEN_ADDRESS = "0x1B7Aa2A0AE1A15E3FBBD2e471179E9C5830Cdf96";

  await hre.run("verify:verify", {
    address: TOKEN_ADDRESS,
    constructorArguments: [TOKEN_NAME, SYMBOL_NAME]
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
