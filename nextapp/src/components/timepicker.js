const avail = [
  '2022-02-11T14:00:00.000Z',
  '2022-02-11T14:30:00.000Z',
  '2022-02-11T15:00:00.000Z',
  '2022-02-11T15:30:00.000Z',
  '2022-02-11T16:00:00.000Z',
  '2022-02-11T16:30:00.000Z',
  '2022-02-11T17:00:00.000Z',
  '2022-02-11T17:30:00.000Z',
  '2022-02-11T18:00:00.000Z',
  '2022-02-11T18:30:00.000Z',
  '2022-02-11T19:00:00.000Z',
  '2022-02-11T19:30:00.000Z',
  '2022-02-11T20:00:00.000Z',
  '2022-02-11T20:30:00.000Z',
  '2022-02-11T21:00:00.000Z',
  '2022-02-11T21:30:00.000Z',
]

import dayjs from 'dayjs'

export default function TimePicker({ selectedDay, setSelectedTime }) {
  return (
    <div>
      {dayjs(selectedDay).format('dddd')}, {dayjs(selectedDay).format('MMMM')}{' '}
      {dayjs(selectedDay).format('D')}
      {avail.map((c, idx) => {
        return (
          <TimeSlot key={idx} onClick={() => setSelectedTime(c)}>
            {dayjs(c).format('hh:mma')}
          </TimeSlot>
        )
      })}
    </div>
  )
}

export function TimeSlot(props) {
  return (
    <button onClick={props.onClick} className="button__box">
      {props.children}
    </button>
  )
}
