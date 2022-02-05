import { useState, useEffect } from "react";
import Head from "next/head";
import DayPicker from "../src/components/daypicker";
import TimePicker from "../src/components/timepicker";
import ConfirmationBox from "../src/components/confirmationbox";
import Link from "next/link";
import { useMoralis } from "react-moralis";
import { useRouter } from 'next/router'

export default function Booking() {
  const [selectedDay, onChange] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const { isAuthenticated } = useMoralis();
  const router = useRouter();
  const {
    isReady,
    query: {
      id,
    }
  } = router;

  useEffect(() => {
    if (!isReady) {
      console.log('Router not ready')
      return;
    }

    console.log(`ID: ${id}`)
  }, [isReady]);


  return (
    
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          {id || 'Loading'}
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
    
  );
}

