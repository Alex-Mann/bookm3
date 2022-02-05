import Calendar from "react-calendar";

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
          ["S", "M", "T", "W", "T", "F", "S"][value.getDay()]
        }
      />
    </div>
  );
}
