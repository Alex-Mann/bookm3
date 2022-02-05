import dayjs from "dayjs";
import BookingForm from "./bookingform";

export default function ConfirmationBox({ selectedDay, selectedTime }) {
  return (
    <>
      {selectedTime && (
        <div>
          CONFIRM
          {dayjs(selectedDay).format("dddd")},{" "}
          {dayjs(selectedDay).format("MMMM")} {dayjs(selectedDay).format("D")} @{" "}
          {dayjs(selectedTime).format("H")}:{dayjs(selectedTime).format("mm")}
          <BookingForm selectedDay={selectedDay} selectedTime={selectedTime} acptUser={'0xflaslkdfjsdlkfsflksadfjksjdf'}/>
        </div>
      )}
    </>
  );
}
