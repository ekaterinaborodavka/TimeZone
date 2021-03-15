import {
  UPDATE_TIME_ZONE,
  GET_TIME,
} from '../types/types.js';

export const updateTimeZone = (value) => {
  return {
    type: UPDATE_TIME_ZONE,
    value,
  };
};

export const getTime = () => {
  return {
    type: GET_TIME,
  };
};
