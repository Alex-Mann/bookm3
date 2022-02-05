
import { useState } from 'react'
import Calendar from 'react-calendar'

export default function DayPicker({value, onChange}) {
 


  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        prev2Label={null}
        next2Label={null}
        minDetail="month"
        minDate={new Date()}
        formatShortWeekday={(locale, value) =>
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'][value.getDay()]
        }
        showWeekNumbers={true}
        onClickWeekNumber={(e, value) => {
          console.log('TODO: I should select an entire week')
        }}
      />
    </div>
  )
}
