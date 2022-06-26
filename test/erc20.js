const chai = require("chai");
const { expect } = require("chai");
const { solidity } = require("ethereum-waffle");
const { ethers } = require("hardhat");

chai.use(solidity);

const TOKEN_NAME = "nFactorial Incubator";
const SYMBOL_NAME = "N17R";

describe("ERC20", function () {
  let token;
  let accounts, bob, alice;

  before(async () => {
    const TokenContract = await hre.ethers.getContractFactory("ERC20");

    accounts = await ethers.getSigners();
    token = await TokenContract.deploy(TOKEN_NAME, SYMBOL_NAME);

    bob = accounts[0];
    alice = accounts[1];
  });

  it("Correct ERC20 metadata", async function () {
    const name = await token.name();
    const symbol = await token.symbol();
    expect(name).to.equal("nFactorial Incubator")
    expect(symbol).to.equal("N17R")
  });

  it("Bob sends tokens to Alice", async function () {
    await token.connect(bob).mint(100);
    await token.connect(bob).transfer(alice.address, 50);

    const bobBalance = await token.balanceOf(bob.address);
    const aliceBalance = await token.balanceOf(alice.address);

    expect(bobBalance).to.equal(50);
    expect(aliceBalance).to.equal(50);
  });

  it("Bob has insufficient funds", async function () {
    await expect(
      token.connect(bob).transfer(alice.address, 500)
    ).to.be.revertedWith("INSUFFICIENT_FUNDS");
  });

  it("Burn tokens", async function () {
    let bobBalance = await token.balanceOf(bob.address);
    let aliceBalance = await token.balanceOf(alice.address);

    await token.connect(bob).burn(bobBalance);
    await token.connect(alice).burn(aliceBalance);

    bobBalance = await token.balanceOf(bob.address);
    aliceBalance = await token.balanceOf(alice.address);

    expect(bobBalance).to.be.equal(0);
    expect(aliceBalance).to.be.equal(0);
  });
});
