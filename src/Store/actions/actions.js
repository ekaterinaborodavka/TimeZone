import {
  UPDATE_TIME_ZONE,
  SYNCHRONIZE_TIME_ZONE_DATE,
} from '../types/types.js';

export const updateTimeZone = (value) => {
  return {
    type: UPDATE_TIME_ZONE,
    value,
  };
};

export const getTime = () => {
  return {
    type: SYNCHRONIZE_TIME_ZONE_DATE,
  };
};
