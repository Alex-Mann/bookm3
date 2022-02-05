import { useState } from "react";
import Head from "next/head";
import DayPicker from "../src/components/daypicker";
import TimePicker from "../src/components/timepicker";
import ConfirmationBox from "../src/components/confirmationbox";

export default function Home() {
  const [value, onChange] = useState(new Date());
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="flex justify-evenly w-full">
          <div >

          <DayPicker value={value} onChange={onChange} />
          <ConfirmationBox />
          </div>
          <TimePicker value={value}/>
        </div>
      </main>
    </div>
  );
}
