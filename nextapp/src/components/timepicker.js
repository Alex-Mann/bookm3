import dayjs from 'dayjs'
import { useMoralisQuery } from 'react-moralis'

const avail = [
  'T14:00:00.000Z',
  'T14:30:00.000Z',
  'T15:00:00.000Z',
  'T15:30:00.000Z',
  'T16:00:00.000Z',
  'T16:30:00.000Z',
  'T17:00:00.000Z',
  'T17:30:00.000Z',
  'T18:00:00.000Z',
  'T18:30:00.000Z',
  'T19:00:00.000Z',
  'T19:30:00.000Z',
  'T20:00:00.000Z',
  'T20:30:00.000Z',
  'T21:00:00.000Z',
  'T21:30:00.000Z',
]

export default function TimePicker({
  selectedDay,
  setSelectedTime,
  acceptingUser,
}) {
  const { data, error, isLoading } = useMoralisQuery('UserSchedule')
  const pendingConflicts = data
    .filter((d) => d.get('status') === 'PENDING')
    .filter((d) => d.get('acceptingUser') === acceptingUser)
    .map((d) => dayjs(d.get('meetingTime')).toISOString())
  const confirmedConflicts = data
    .filter((d) => d.get('status') === 'CONFIRMED')
    .filter((d) => d.get('acceptingUser') === acceptingUser)
    .map((d) => dayjs(d.get('meetingTime')).toISOString())
  return (
    <div>
      <div className="font-bold">
        {dayjs(selectedDay).format('dddd')}, {dayjs(selectedDay).format('MMMM')}{' '}
        {dayjs(selectedDay).format('D')}
      </div>
      {avail.map((c, idx) => {
        c = `${dayjs(selectedDay).format('YYYY-MM-DD')}${c}`
        return (
          <TimeSlot key={idx} onClick={() => setSelectedTime(c)}>
            {pendingConflicts.includes(c) && 'potentch conflict '}
            {confirmedConflicts.includes(c) && 'hard conflict '}
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
