import React from 'react'
import { useForm } from 'react-hook-form'
import { useMoralis } from 'react-moralis'

import { requestBooking } from '../models/UserSchedule'

export default function BookingForm({ selectedDay, selectedTime, acptUser }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { user } = useMoralis()

  const onSubmit = async (data) => {
    /* TODO:
     *  need to handle the chain transaction here/store the chain payload
     *  could also look up the address for the other user and then store payload as a pointer instead of a string
     */
    await requestBooking({
      meetingTime: selectedTime,
      duration: null,
      status: null,
      name: data.Name,
      email: data.Email,
      notes: data.Notes,
      reqUser: user,
      acptUser: acptUser,
      // TODO: add a field for the chain payload
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
