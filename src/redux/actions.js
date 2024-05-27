import axios from "axios";
import formatter from "../utils/formatter";

export const SET_DATE = "SET_DATE";
export const SET_DURATION = "SET_DURATION";
export const FETCH_TIMESLOTS_REQUEST = "FETCH_TIMESLOTS_REQUEST";
export const FETCH_TIMESLOTS_SUCCESS = "FETCH_TIMESLOTS_SUCCESS";
export const FETCH_TIMESLOTS_FAILURE = "FETCH_TIMESLOTS_FAILURE";
export const SELECT_TIMESLOT = "SELECT_TIMESLOT";

export const setDate = (date) => ({
  type: SET_DATE,
  payload: date,
});

export const setDuration = (duration) => ({
  type: SET_DURATION,
  payload: duration,
});

export const selectTimeSlot = (slot) => ({
  type: SELECT_TIMESLOT,
  payload: slot,
});

export const fetchTimeSlots =
  ({ date, duration }) =>
  async (dispatch) => {
    dispatch({ type: FETCH_TIMESLOTS_REQUEST });
    let result = formatter.getDateRange(date);
    console.log(result);
    try {
      const response = await axios.get(
        `https://app.appointo.me/scripttag/mock_timeslots?start_date=${result?.startDate}&end_date=${result?.endDate}`
      );
      console.log(response);
      dispatch({ type: FETCH_TIMESLOTS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_TIMESLOTS_FAILURE, payload: error.message });
    }
  };
