import React from 'react';

import DateTime from '~src/components/DateTime/DateTime';
import GetButton from '~src/components/GetButton/GetButton';
import TimeZone from '~src/components/TimeZone/TimeZone';

import './App.css';

export default function App() {

  return (
    <div className='container'>
      <h1 className='title'>Current Date</h1>
      <div className='times_wrapper'>
        <div className='time_zone_wrapper'>
          <h2 className='sub-title'>Time Zone</h2>
          <TimeZone />
        </div>
        <div className='date_time_wrapper'>
          <h2 className='sub-title'>Date Time</h2>
          <DateTime />
        </div>
      </div>
      <GetButton />
    </div>
  );
}
