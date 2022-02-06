import { ethers } from "hardhat";

// Deploy to polygon with
// npx hardhat run scripts/deploy.ts --network matic
async function main() {
	const [deployer] = await ethers.getSigners();

	const Bookm3 = await ethers.getContractFactory("Bookm3");
	const booking = await Bookm3.deploy();
	await booking.deployed();
	console.log("Escrow deployed to:", booking.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
