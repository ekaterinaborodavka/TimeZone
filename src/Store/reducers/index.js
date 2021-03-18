import {
  UPDATE_TIME_ZONE,
  SYNCHRONIZE_TIME_ZONE_DATE,
} from '../types/types';

const initialState = {
  date: new Date(),
  timizone: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TIME_ZONE: {
      return {
        ...state,
        date: new Date(),
        timizone: action.value,
      };
    }
    case SYNCHRONIZE_TIME_ZONE_DATE: {
      const timestamp = Date.now() + state.timizone*3600*1000;
      return {
        ...state,
        date: new Date(timestamp),
      };
    }
    default:
      return state;
  }
};

export default reducer;
