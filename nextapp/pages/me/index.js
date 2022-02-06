import { useState } from "react";
import dayjs from "dayjs";
import { useMoralisQuery, useMoralis } from "react-moralis";
import Nav from "../../src/components/nav";
import { TimeSlot } from "../../src/components/timepicker";
import { formatAddr } from "../../utils";

export default function Me() {
  const { data, error, isLoading } = useMoralisQuery("UserSchedule");
  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const { isAuthenticated, user } = useMoralis();

  const upcomingMeetings = data
    .filter((d) => d.get("status") === "PENDING")
    .filter((d) => d.get("acceptingUser") === isAuthenticated ? user.get("ethAddress") : '')
    .filter((d) => dayjs().isBefore(d.get("meetingTime")))
    .sort(
      (a, b) =>
        Date.parse(a.get("meetingTime")) - Date.parse(b.get("meetingTime"))
    );

  const prevMeetings = data
    .filter((d) => d.get("status") === "COMPLETE")
    .filter((d) => d.get("acceptingUser") ===  isAuthenticated ? user.get("ethAddress") : "")
    .filter((d) => dayjs().isAfter(d.get("meetingTime")));

  return (
    <>
      <Nav></Nav>
      {isAuthenticated ? (
        <div className="flex flex-col items-center justify-center mt-20 py-2">
          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <div className="flex justify-evenly w-full">
              <div className="flex flex-col">
                Previous Meetings
                {prevMeetings.map((d, idx) => (
                  <TimeSlot key={idx} onClick={() => setSelectedMeeting(d)}>
                    {dayjs(d.get("meetingTime")).format("MMM DD, YYYY")}
                    {" with "}
                    {d.get("name") || d.get("requestingUser").get("ethAddress")}
                  </TimeSlot>
                ))}
              </div>
              <div className="flex flex-col justify-between">
                My Upcoming Meetings
                {upcomingMeetings.map((d, idx) => (
                  <TimeSlot key={idx} onClick={() => setSelectedMeeting(d)}>
                    {dayjs(d.get("meetingTime")).format("MMM DD @ hh:mm a")}
                    {" with "}
                    {d.get("name") ||
                      formatAddr(d.get("requestingUser").get("ethAddress"))}
                  </TimeSlot>
                ))}
              </div>
              <div className="flex flex-col details__box !h-full !pb-4 !mt-7">
                {selectedMeeting ? (
                  <>
                    <div>
                      <div>
                        Name:{" "}
                        {selectedMeeting.get("name") || "No name available"}
                      </div>
                      <div>
                        Requestor:{" "}
                        {selectedMeeting
                          .get("requestingUser")
                          .get("ethAddress")}
                      </div>
                      <div>Notes: {selectedMeeting.get("notes")}</div>
                      <div>Fee: 0.003 Eth (**TODO**)</div>
                      <div>
                        Duration: {selectedMeeting.get("duration")} mins
                      </div>
                      <div className="grow"></div>
                    </div>
                    <div>
                      {!dayjs().isBefore(
                        selectedMeeting.get("meetingTime")
                      ) && (
                        <div className="flex flex-col pt-8">
                          <button className="bg-[#B4AAD0] text-white font-bold hover:bg-[#d1b9dc] transition-colors ">
                            return
                          </button>
                          or
                          <button className="bg-[#B4AAD0] text-white font-bold hover:bg-[#d1b9dc] transition-colors">
                            burn
                          </button>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <div>Please select a meeting to view details</div>
                )}
              </div>
            </div>
          </main>
        </div>
      ) : (
        <div className="login__shadow absolute bottom-1/2 text-3xl text-white font-bold bg-[#222] w-full text-center">
          pls login
        </div>
      )}
    </>
  );
}
