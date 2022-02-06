import { expect } from "chai";
import { ethers } from "hardhat";

function parse(n: any): number {
	return n.div('100000000000000000').toNumber();
}

describe("Escrow", function () {

	let Bookm3: any;
  let owner: any;
  let ownerAddress: string;
	let booking: any;
  let addr1: any;
  let addr2: any;
  let addrs: any;
	beforeEach(async function () {
		[owner, addr1, addr2, ...addrs] = await ethers.getSigners();
		ownerAddress = await owner.getAddress();
		Bookm3 = await ethers.getContractFactory("Bookm3");
		booking = await Bookm3.deploy();
		await booking.deployed();
	});

	it("Should add funds into escrow", async function () {
		const currentTime = Math.floor(Date.now() / 1000);
		const endtime = currentTime + 5;
		const bookTx = await booking.book(ownerAddress, endtime, {value: ethers.utils.parseEther('0.1')});
		await bookTx.wait();

		const bookings = await booking.bookingsOf(ownerAddress, endtime);
		expect(bookings.toString()).to.equal(ethers.utils.parseEther('0.1').toString());
	});

	it("Should be able to get funds out of escrow after time delay", async function () {
		const originalBalance = await owner.getBalance()
		const currentTime = Math.floor(Date.now() / 1000);
		const endtime = currentTime + 2;
		const bookTx = await booking.book(ownerAddress, endtime, {value: ethers.utils.parseEther('0.1')});
		await bookTx.wait();

		expect(parse(await owner.getBalance())).to.be.below(parse(originalBalance) - 0.1);

		await new Promise(r => setTimeout(r, 3000));

		await booking.refund(ownerAddress, endtime);
		expect(parse(await owner.getBalance())).to.be.above(parse(originalBalance) - 0.1);
	});

	it("Should be not be able to get funds out of escrow before time delay", async function () {
		const originalBalance = await owner.getBalance()
		const currentTime = Math.floor(Date.now() / 1000);
		const endtime = currentTime + 200;
		const bookTx = await booking.book(ownerAddress, endtime, {value: ethers.utils.parseEther('0.1')});
		await bookTx.wait();

		expect(parse(await owner.getBalance())).to.be.below(parse(originalBalance) - 0.1);

		// To lazy to figure out the correct way in chai
		let failed = false;
		try {
			await booking.refund(ownerAddress, endtime);
		} catch {
			failed = true;
		}
		expect(failed).to.equal(true);
		expect(parse(await owner.getBalance())).to.be.below(parse(originalBalance) - 0.1);
	});
});
