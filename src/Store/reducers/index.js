import {
  UPDATE_TIME_ZONE,
  GET_TIME,
} from '../types/types';

const initialState = {
  date: new Date(),
  value: '',
  dateToTimeZone: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TIME_ZONE: {
      return {
        ...state,
        date: new Date(),
        value: action.value,
        dateToTimeZone: '',
      };
    }
    case GET_TIME: {
      const date = state.date.getTime();
      const newDate = date + state.value*3600*1000;
      return {
        ...state,
        dateToTimeZone: new Date(newDate),
      };
    }
    default:
      return state;
  }
};

export default reducer;
