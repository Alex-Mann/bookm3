import { expect } from "chai";
import { ethers } from "hardhat";

function parse(n: any): number {
	return n.div('100000000000000000').toNumber();
}

describe("Escrow", function () {

	let Bookm3: any;
  let owner: any;
  let ownerAddress: string;
	let bookingOriginal: any;
	let booking: any;
  let addr1: any;
  let addr1Address: string;
  let addr2: any;
  let addrs: any;

	beforeEach(async function () {
		[owner, addr1, addr2, ...addrs] = await ethers.getSigners();
		addr1Address = await addr1.getAddress();
		Bookm3 = await ethers.getContractFactory("Bookm3");
		bookingOriginal = await Bookm3.deploy();
		await bookingOriginal.deployed();
		booking = bookingOriginal.connect(addr1);
	});

	it("Should add funds into escrow", async function () {
		const currentTime = Math.floor(Date.now() / 1000);
		const endtime = currentTime + 5;
		const bookTx = await booking.book(addr1Address, endtime, {value: ethers.utils.parseEther('0.1')});
		await bookTx.wait();

		const bookings = await booking.bookingsOf(addr1Address, endtime);
		expect(bookings.toString()).to.equal(ethers.utils.parseEther('0.1').toString());
	});

	it("Should be able to get funds out of escrow after time delay", async function () {
		const originalBalance = await addr1.getBalance()
		const currentTime = Math.floor(Date.now() / 1000);
		const endtime = currentTime + 1;
		const bookTx = await booking.book(addr1Address, endtime, {value: ethers.utils.parseEther('0.1')});
		await bookTx.wait();

		expect(parse(await addr1.getBalance())).to.be.below(parse(originalBalance) - 0.1);

		await new Promise(r => setTimeout(r, 1200));

		await booking.refund(addr1Address, endtime);
		expect(parse(await addr1.getBalance())).to.be.above(parse(originalBalance) - 0.1);
	});

	it("Should be not be able to get funds out of escrow before time delay", async function () {
		const originalBalance = await addr1.getBalance()
		const currentTime = Math.floor(Date.now() / 1000);
		const endtime = currentTime + 200;
		const bookTx = await booking.book(addr1Address, endtime, {value: ethers.utils.parseEther('0.1')});
		await bookTx.wait();

		expect(parse(await addr1.getBalance())).to.be.below(parse(originalBalance) - 0.1);

		// To lazy to figure out the correct way in chai
		let failed = false;
		try {
			await booking.refund(addr1Address, endtime);
		} catch {
			failed = true;
		}
		expect(failed).to.equal(true);
		expect(parse(await addr1.getBalance())).to.be.below(parse(originalBalance) - 0.1);
	});

	it("Should be able to get funds out of escrow after approval", async function () {
		const originalBalance = await addr1.getBalance()
		const currentTime = Math.floor(Date.now() / 1000);
		const endtime = currentTime + 200;
		const bookTx = await booking.book(addr1Address, endtime, {value: ethers.utils.parseEther('0.1')});
		await bookTx.wait();

		expect(parse(await addr1.getBalance())).to.be.below(parse(originalBalance) - 0.1);

		await bookingOriginal.release(addr1Address, endtime);
		await booking.refund(addr1Address, endtime);
		expect(parse(await addr1.getBalance())).to.be.above(parse(originalBalance) - 0.1);
	});
});
