import React, { useCallback } from 'react';
import { useDispatch} from 'react-redux';

import './TimeZone.css';

import { categoryTimeZones } from '~src/Mocks/CategoryTimeZone';
import * as actions from '~src/Store/actions/actions';

export default function TimeZone() {
  const dispatch = useDispatch();

  const onChange = useCallback(
      ({ target }) => {
        dispatch(actions.updateTimeZone(target.value));
      }, [dispatch],
  );

  return (
    <select className='category_time_zone'
      onChange = { onChange }>
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
    </select>
  );
}
