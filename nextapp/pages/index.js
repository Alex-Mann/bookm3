import { useState } from "react";
import Head from "next/head";
import DayPicker from "../src/components/daypicker";
import TimePicker from "../src/components/timepicker";
import ConfirmationBox from "../src/components/confirmationbox";
import { LoginButton } from "../src/components/loginbutton";
import { useMoralis } from "react-moralis";
import CopyURL from "../src/components/copyURL";

export default function Home() {
  const [selectedDay, onChange] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const { isAuthenticated } = useMoralis();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="nav">
        <div className="nav-item">BookM3</div>
        <LoginButton></LoginButton>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        {isAuthenticated ? (
          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <CopyURL />
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
        ) : (
          <div>pls login</div>
        )}
      </div>
    </>
  );
}
