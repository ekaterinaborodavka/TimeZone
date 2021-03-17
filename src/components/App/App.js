import React from 'react';
import styled from 'styled-components'

import DateTime from '~src/components/DateTime/DateTime';
import GetButton from '~src/components/GetButton/GetButton';
import TimeZone from '~src/components/TimeZone/TimeZone';

const DivContainer = styled.div`
  font-size: 24px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`

const H1 = styled.h1`
  font-weight: bold;
  font-size: 2.5rem;
  width: 100%;
  text-align: center;
  background-color: rgb(80, 156, 80);
  color: white;
  padding: 2rem 0;
  margin-bottom: 2rem;
`
const DivTimesWrapp = styled.div`
  display: flex;
  justify-content: space-around;
`

const DivTimesZonesWrapp = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  width: 45%;
`

const H2 = styled.h2`
  margin: 1rem;
  padding: 1rem;
  text-align: center;
  color: rgb(45, 90, 45);
  border-top: 1px solid rgb(45, 90, 45);
  border-bottom: 1px solid rgb(45, 90, 45);
`

export default function App() {

  return (
    <DivContainer>
      <H1 className='title'>Current Date</H1>
      <DivTimesWrapp className='times_wrapper'>
        <DivTimesZonesWrapp className='time_zone_wrapper'>
          <H2 className='sub-title'>Time Zone</H2>
          <TimeZone />
        </DivTimesZonesWrapp>
        <DivTimesZonesWrapp className='date_time_wrapper'>
          <H2 className='sub-title'>Date Time</H2>
          <DateTime />
        </DivTimesZonesWrapp>
      </DivTimesWrapp>
      <GetButton />
    </DivContainer>
  );
}
