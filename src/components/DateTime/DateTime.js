import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import styled from 'styled-components'

import { format } from 'date-fns';

const Div = styled.div`
  width: 40%;
  font-size: 1.3rem;
  font-weight: normal;
  margin: 1rem auto;
  padding: 0.3rem;
  border: 1px solid black;
`

export default function DateTime() {
  const date = useSelector((state) => state.date);
  const dateToTimeZone = useSelector((state) => state.dateToTimeZone, shallowEqual);

  return (
    <Div>
      { dateToTimeZone ?
                format(dateToTimeZone, 'dd-MM-yyyy hh:mm:ss aa') :
                format(date, 'dd-MM-yyyy hh:mm:ss aa') }
    </Div>
  );
}
