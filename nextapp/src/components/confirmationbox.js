import dayjs from "dayjs";
import BookingForm from "./bookingform";

export default function ConfirmationBox({ selectedDay, selectedTime, id }) {
  return (
    <>
      {selectedTime && (
        <div>
          <div className="details__box !mb-6">
            {" "}
            <div className="details__title">Confirm Event Details</div>
            <div className="font-normal mb-2">
              30 Minute Meeting<br/>
              {dayjs(selectedDay).format("dddd")},{" "}
              {dayjs(selectedDay).format("MMMM")}{" "}
              {dayjs(selectedDay).format("D")} @{" "}
              {dayjs(selectedTime).format("H")}:
              {dayjs(selectedTime).format("mm")} EST<br/>
              with<br/>
              {id.substring(0, 8)}...

            </div>
          </div>

          <BookingForm
            selectedDay={selectedDay}
            selectedTime={selectedTime}
            acptUser={"0xflaslkdfjsdlkfsflksadfjksjdf"}
          />
        </div>
      )}
    </>
  );
}
