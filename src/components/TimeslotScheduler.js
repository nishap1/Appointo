import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useDispatch, useSelector } from "react-redux";
import "../global.css";
import {
  fetchTimeSlots,
  selectTimeSlot,
  setDate,
  setDuration,
} from "../redux/actions";
import formatter from "../utils/formatter";

const TimeslotScheduler = () => {
  const dispatch = useDispatch();
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [isSlotSelected, setIsSlotSelected] = useState(false);
  const [selectedSlot, setSelelctedSlot] = useState();

  const { date, duration, timeSlots, selectedTimeSlot, loading, error } =
    useSelector((state) => state.timeslot);

  useEffect(() => {
    setIsDataFetched(false);
    setIsSlotSelected(false);
    setSelelctedSlot(undefined);
    dispatch(fetchTimeSlots({ date, duration })).then(() =>
      setIsDataFetched(true)
    );
  }, [date, duration, dispatch]);

  const handleDateChange = (newDate) => {
    dispatch(setDate(newDate));
  };

  const handleDurationChange = (event) => {
    dispatch(setDuration(Number(event.target.value)));
  };

  const handleTimeSlotSelect = (slot, index) => {
    dispatch(selectTimeSlot(slot));
    setIsSlotSelected(true);
    setSelelctedSlot(index);
  };

  return (
    <>
      <div>
        <img src="/vector1.svg" className="right-image" alt="Left Image" />
      </div>
      <div className="App">
        <div>
          <div className="flex-container centered-div">
            <div className="flex-column bg-gray flex-container centered-div">
              <div className=" centered-div">
                <div className="text-md font-bold">Test Service</div>
                <div className="text-sm">
                  <span className=" font-bold text-dark">Timezone: </span>
                  Asia/culcutta
                </div>
                <div className="calendar-section">
                  <Calendar
                    onChange={handleDateChange}
                    value={date}
                    onActiveStartDateChange={({ activeStartDate }) =>
                      handleDateChange(activeStartDate)
                    }
                  />
                </div>
              </div>
            </div>
            <div className="flex-column bg-white">
              {" "}
              <div className="label-variant text-xs text-dark">
                SELECT FROM VARIANTS
              </div>
              <select
                id="duration"
                value={duration}
                onChange={handleDurationChange}
              >
                <option value={30}>30 min</option>
              </select>
              <hr />
              <div className="slot-text text-dark">
                {!loading &&
                  timeSlots?.length > 0 &&
                  formatter.prettyDate(timeSlots[0].date) +
                    " - AVAILABLE SLOTS"}
              </div>
              <div className="timeslots">
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {!loading && timeSlots?.length > 0 ? (
                  <div>
                    {timeSlots[0].slots.map((slot, index) => (
                      <button
                        key={index}
                        className={`timeslot ${
                          selectedTimeSlot === slot ? "selected" : ""
                        }`}
                        onClick={() => handleTimeSlotSelect(slot, index)}
                      >
                        <div
                          className={`${
                            selectedTimeSlot === slot ? "selected-slot" : ""
                          }`}
                        >
                          <div>
                            {formatter.formatDateTime(slot.start_time)} -{" "}
                            {formatter.formatDateTime(slot.end_time)}
                          </div>
                          <div>
                            {selectedSlot == index && (
                              <img
                                src="/check-icon.svg"
                                className="check-icon"
                                alt="selected"
                              />
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  isDataFetched && <p>No available slots for this day</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="next-button-div centered-div ">
        <div className="bg-primary text-white app-name">
          <div>
            <span className="app-name">POWERED BY</span> APPOINTO
            <div
              style={{ float: "right", marginRight: "20px" }}
              className="app-name"
            >
              {isSlotSelected && (
                <button className="next-button">
                  <div className="next-button-alignment">
                    <div>Next</div>
                    <div style={{ paddingLeft: "5px" }}>
                      {" "}
                      <img src="/chevron-right.png" alt="right-icon" />
                    </div>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="/vector2.svg" className="left-image" alt="Left Image" />
      </div>
    </>
  );
};

export default TimeslotScheduler;
