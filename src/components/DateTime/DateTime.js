import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { format } from 'date-fns';

import './DateTime.css';

export default function DateTime() {
  const date = useSelector((state) => state.date);
  const dateToTimeZone = useSelector((state) => state.dateToTimeZone, shallowEqual);

  return (
    <div className='date_time'>
      { dateToTimeZone ?
                format(dateToTimeZone, 'dd-MM-yyyy hh:mm:ss aa') :
                format(date, 'dd-MM-yyyy hh:mm:ss aa') }
    </div>
  );
}
