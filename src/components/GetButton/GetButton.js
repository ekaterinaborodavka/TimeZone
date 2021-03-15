import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import './GetButton.css';

import * as actions from '~src/Store/actions/actions';

export default function GetButton() {
  const dispatch = useDispatch();

  const onGetTime = useCallback(
      () => {
        dispatch(actions.getTime());
      }, [dispatch],
  );

  return (
    <button className='get_button'
      onClick={ onGetTime }>GET</button>
  );
}
