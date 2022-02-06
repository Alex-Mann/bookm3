import { useState } from "react";
import Head from "next/head";
import DayPicker from "../src/components/daypicker";
import TimePicker from "../src/components/timepicker";
import ConfirmationBox from "../src/components/confirmationbox";
import { useMoralis } from "react-moralis";
import CopyURL from "../src/components/copyURL";
import Nav from "../src/components/nav";

export default function Home() {
  const [selectedDay, onChange] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const { isAuthenticated } = useMoralis();

  return (
    <div
      className={`min-h-screen ${
        !isAuthenticated && "bg-login bg-cover bg-center overflow-hidden"
      }`}
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav isAuthenticated={isAuthenticated}/>
      <div className="flex flex-col items-center justify-center py-2">
        {isAuthenticated ? (
          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <CopyURL />
            <div className="flex justify-evenly w-full">
              <div className="flex flex-col justify-between">
                <DayPicker selectedDay={selectedDay} onChange={onChange} />
                <ConfirmationBox
                  selectedDay={selectedDay}
                  selectedTime={selectedTime}
                  id={"0x00000000000000000000000000000000"}
                />
              </div>
              <TimePicker
                selectedDay={selectedDay}
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
              />
            </div>
          </main>
        ) : (
          <div className="login__shadow absolute bottom-1/2 text-3xl text-white font-bold">
            pls login
          </div>
        )}
      </div>
    </div>
  );
}
