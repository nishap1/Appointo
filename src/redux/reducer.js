import {
  SET_DATE,
  SET_DURATION,
  FETCH_TIMESLOTS_REQUEST,
  FETCH_TIMESLOTS_SUCCESS,
  FETCH_TIMESLOTS_FAILURE,
  SELECT_TIMESLOT,
} from "./actions";

const initialState = {
  date: new Date(),
  duration: 30,
  timeSlots: [],
  selectedTimeSlot: null,
  loading: false,
  error: null,
};

const timeslotReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE:
      return { ...state, date: action.payload };
    case SET_DURATION:
      return { ...state, duration: action.payload };
    case FETCH_TIMESLOTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_TIMESLOTS_SUCCESS:
      return { ...state, loading: false, timeSlots: action.payload };
    case FETCH_TIMESLOTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case SELECT_TIMESLOT:
      return { ...state, selectedTimeSlot: action.payload };
    default:
      return state;
  }
};

export default timeslotReducer;
