import { ethers } from "hardhat";

async function main() {
	const [deployer] = await ethers.getSigners();
  // We get the contract to deploy
  const Escrow = await ethers.getContractFactory("RefundEscrow");
  const escrow = await Escrow.deploy(await deployer.getAddress());

  await escrow.deployed();

  console.log("Escrow deployed to:", escrow.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
