import React, { useCallback } from 'react';
import { useDispatch} from 'react-redux';
import styled from 'styled-components'

import { categoryTimeZones } from '~src/Mocks/CategoryTimeZone';
import * as actions from '~src/Store/actions/actions';

const Select = styled.select`
  font-size: 1.2rem;
  width: 40%;
  margin: 1rem auto;
  padding: 0.3rem;
  border: 1px solid black;
`

export default function TimeZone() {
  const dispatch = useDispatch();

  const onChange = useCallback(
      ({ target }) => {
        dispatch(actions.updateTimeZone(target.value));
      }, [dispatch],
  );

  return (
    <Select onChange = { onChange }>
      <option> Select time zone </option>
      {
        categoryTimeZones.map(({ id, name, timeZone, value }) => (
          <option
            key={ id }
            timezone={ timeZone }
            value={ value }
          >
            { name } /
            { timeZone }
          </option>
        ))
      }
    </Select>
  );
}
