import { useState } from "react";

export default function TimePicker() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      {JSON.stringify(value)}
      <Calendar
        onChange={onChange}
        value={value}
        prev2Label={null}
        next2Label={null}
        minDetail="month"
        minDate={new Date()}
        formatShortWeekday={(locale, value) =>
          ["S", "M", "T", "W", "T", "F", "S"][value.getDay()]
        }
      />
    </div>
  );
}