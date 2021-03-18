import React from 'react';
import { useSelector } from 'react-redux';

import DateTimeString from '~src/ui/DateTimeStrig/DateTimeString';

import { format } from 'date-fns';


export default function DateTime() {
  const date = useSelector((state) => state.date);

  return (
    <DateTimeString>
      { format(date, 'dd-MM-yyyy hh:mm:ss aa') }
    </DateTimeString>
  );
}
