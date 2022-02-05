const avail = [
  "9:00",
  "9:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
];

import dayjs from 'dayjs';

export default function TimePicker({ value }) {
  return (
    <div>
      
      {dayjs(value).format('dddd')}, {dayjs(value).format('MMMM')} {dayjs(value).format('D')}
      {avail.map((c, idx) => {
        return <button key={idx} className='button__box'>{c}</button>;
      })}
    </div>
  );
}
