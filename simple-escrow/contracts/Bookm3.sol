// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "hardhat/console.sol";

/**
 * @title Escrow
 * @dev Base escrow contract, holds funds designated for a payee until they
 * withdraw them.
 *
 * Intended usage: This contract (and derived escrow contracts) should be a
 * standalone contract, that only interacts with the contract that instantiated
 * it. That way, it is guaranteed that all Ether will be handled according to
 * the `Escrow` rules, and there is no need to check for payable functions or
 * transfers in the inheritance tree. The contract that uses the escrow as its
 * payment method should be its owner, and provide public methods redirecting
 * to the escrow's deposit and withdraw.
 */
contract Bookm3 is Ownable {
	using Address for address payable;

	event Booked(address indexed payee, uint256 endtime, uint256 weiAmount);
	event Refunded(address indexed payee, uint256 weiAmount);

	struct Booking {
		uint256 amountGwei;
		uint256 timestamp;
		bool released;
	}
	mapping(bytes32 => Booking) private _bookings;

	function _hashBooking(address payee, uint256 endtime) private pure returns(bytes32) {
		return keccak256(abi.encodePacked(payee, endtime));
	}

	function bookingsOf(address payee, uint256 endtime) public view returns (uint256) {
		return _bookings[_hashBooking(payee, endtime)].amountGwei;
	}

	function book(address payee, uint256 endtime) public payable virtual {
		uint256 amount = msg.value;
		_bookings[_hashBooking(payee, endtime)] = Booking(amount, endtime, false);
		emit Booked(payee, endtime, amount);
	}

	function release(address payee, uint256 endtime) public virtual onlyOwner {
		_bookings[_hashBooking(payee, endtime)].released = true;
	}

	/* Watch out, this is vulnerable to a re-entrancy attack
	 * Must be called only by the owner, don't allow anyone else to specify target
	 */
	function refund(address payable payee, uint256 endtime) public virtual {
		bytes32 index = _hashBooking(payee, endtime);
		Booking memory booking = _bookings[index];

		require(booking.released || block.timestamp > endtime, "Does not meet conditions for refund");

		_bookings[index] = Booking(0, 0, false);

		payee.sendValue(booking.amountGwei);

		emit Refunded(payee, booking.amountGwei);
	}
}
