import { useState } from 'react'
import dayjs from 'dayjs'
import { useMoralisQuery } from 'react-moralis'
import Nav from '../../src/components/nav'
import { TimeSlot } from '../../src/components/timepicker'

function formatAddr(addr) {
  const ADDR_LEN = 10
  if (addr.length > 10) {
    return `${addr.substr(0, ADDR_LEN - 1)}...`
  }
}

export default function Me() {
  const { data, error, isLoading } = useMoralisQuery('UserSchedule')
  const [selectedMeeting, setSelectedMeeting] = useState(null)

  const upcomingMeetings = data
    .filter((d) => d.get('status') === 'PENDING')
    .filter((d) => dayjs().isBefore(d.get('meetingTime')))
    .sort(
      (a, b) =>
        Date.parse(a.get('meetingTime')) - Date.parse(b.get('meetingTime')),
    )

  const prevMeetings = data
    .filter((d) => d.get('status') === 'COMPLETE')
    .filter((d) => dayjs().isAfter(d.get('meetingTime')))

  return (
    <>
      <Nav></Nav>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="flex justify-evenly w-full">
            <div className="flex flex-col">
              Previous Meetings
              {prevMeetings.map((d, idx) => (
                <TimeSlot key={idx} onClick={() => setSelectedMeeting(d)}>
                  {dayjs(d.get('meetingTime')).format('MMM DD, YYYY')}
                  {' with '}
                  {d.get('name') || d.get('requestingUser').get('ethAddress')}
                </TimeSlot>
              ))}
            </div>
            <div className="flex flex-col justify-between">
              My Upcoming Meetings
              {upcomingMeetings.map((d, idx) => (
                <TimeSlot key={idx} onClick={() => setSelectedMeeting(d)}>
                  {dayjs(d.get('meetingTime')).format('MMM DD @ hh:mm a')}
                  {' with '}
                  {d.get('name') ||
                    formatAddr(d.get('requestingUser').get('ethAddress'))}
                </TimeSlot>
              ))}
            </div>
            <div className="flex flex-col justify-between items-start button__box">
              {selectedMeeting ? (
                <>
                  <div>
                    <div>
                      {selectedMeeting.get('name') || 'No name available'}
                    </div>
                    <div>
                      {selectedMeeting.get('requestingUser').get('ethAddress')}
                    </div>
                    <div>{selectedMeeting.get('notes')}</div>
                    <div>Fee: 0.003 Eth (**TODO**)</div>
                    <div>Duration: {selectedMeeting.get('duration')} mins</div>
                    <div className="grow"></div>
                  </div>
                  <div>
                    {dayjs().isBefore(selectedMeeting.get('meetingTime')) ? (
                      <button
                        className="w-full self-end"
                        style={{
                          backgroundColor: 'green',
                          color: 'white',
                        }}
                      >
                        Join Now
                      </button>
                    ) : (
                      <div>Meeting Complete 😏</div>
                    )}
                  </div>
                </>
              ) : (
                <div>pls pick me</div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
