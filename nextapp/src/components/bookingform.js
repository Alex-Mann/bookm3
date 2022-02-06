import dayjs from 'dayjs'
import React from 'react'
import { useForm } from 'react-hook-form'
import { ethers } from 'ethers';
import Bookm3ABI from '../../static/Bookm3.json';


import { requestBooking } from '../models/UserSchedule'

export default function BookingForm({ selectedDay, selectedTime, acptUser }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const Bookm3ActualABI = Bookm3ABI.abi;

  const onSubmit = async (data) => {
    const { ethereum } = window;
    if (!ethereum) {
      console.warn("No Wallet, we need to do something about this");
      return;
    }

    const durationSec = 30 * 60;
    const endtime = dayjs(selectedTime).unix() + durationSec;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const signerAddress = await signer.getAddress();
    const bookingContract = new ethers.Contract('0xB32b182414ac7C2311C4619db04ec5c6f968ee7F', Bookm3ActualABI, signer);
    const bookTx = await bookingContract.book(signerAddress, ethers.BigNumber.from(endtime), {value: ethers.utils.parseEther('0.001')});
    await bookTx.wait();

    // Chain stuff can be referenced by meetingTime + duration as well as the address of the meeter
    await requestBooking({
      meetingTime: selectedTime,
      duration: durationSec,
      status: null,
      name: data.Name,
      email: data.Email,
      notes: data.Notes,
      reqUser: signerAddress,
      acptUser: acptUser,
    })
    console.log('data', data)
    console.log('time', selectedTime)
  }
  console.log('errors', errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errors && <p>{errors.message}</p>}
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="text"
          name="floating_first_name"
          id="floating_first_name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#222] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-400 peer"
          placeholder="Name"
          {...register('Name', { required: true, maxLength: 80 })}
        />
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="text"
          name="floating_email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#222] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-400 peer"
          placeholder="Email address"
          {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
        />
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <textarea
          type="text"
          name="textarea"
          id="textarea"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#222] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-400 peer"
          placeholder="Please share anything that will help prepare for our meeting."
          {...register('Notes', {})}
        />
      </div>

      <button
        type="submit"
        className="button__box !w-full"
      >
        Schedule Event
      </button>
    </form>
  )
}
