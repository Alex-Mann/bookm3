import { useState } from 'react'
import Head from 'next/head'
import Nav from '../src/components/nav'
import DayPicker from '../src/components/daypicker'
import TimePicker from '../src/components/timepicker'
import ConfirmationBox from '../src/components/confirmationbox'
import Link from 'next/link'

export default function Home() {
  const [selectedDay, onChange] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState('')

  return (
    <>
      <Nav></Nav>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="flex justify-evenly w-full">
            <div className="flex flex-col justify-between">
              <DayPicker selectedDay={selectedDay} onChange={onChange} />
              <ConfirmationBox
                selectedDay={selectedDay}
                selectedTime={selectedTime}
              />
            </div>
            <TimePicker
              selectedDay={selectedDay}
              setSelectedTime={setSelectedTime}
            />
          </div>
        </main>
      </div>
    </>
  )
}
