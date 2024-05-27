import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Calendar from "react-calendar";
import {
  fetchTimeSlots,
  setDate,
  setDuration,
  selectTimeSlot,
} from "./redux/actions";
import "react-calendar/dist/Calendar.css";
import "./global.css";
import formatter from "./utils/formatter";
import Header from "./components/Header";

const TimeslotScheduler = () => {
  const dispatch = useDispatch();
  const [isDataFetched, setIsDataFetched] = useState(false);

  const { date, duration, timeSlots, selectedTimeSlot, loading, error } =
    useSelector((state) => state.timeslot);

  useEffect(() => {
    setIsDataFetched(false);
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

  const handleTimeSlotSelect = (slot) => {
    dispatch(selectTimeSlot(slot));
  };

  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <div className="flex-column bg-gray">
          <div>Test Service</div>
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
        <div className="flex-column">
          {" "}
          <div className="label-variant">SELECT FROM VARIANTS</div>
          <select
            id="duration"
            value={duration}
            onChange={handleDurationChange}
          >
            <option value={30}>30 min</option>
          </select>
          <hr />
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
                    onClick={() => handleTimeSlotSelect(slot)}
                  >
                    {formatter.formatDateTime(slot.start_time)} -{" "}
                    {formatter.formatDateTime(slot.end_time)}
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
  );
};

export default TimeslotScheduler;
