import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import * as actions from '~src/Store/actions/actions';
import SynchronizeButton from '~src/ui/SynchronizeButton/SynchronizeButton';

export default function SynchronizeTimeZoneButton() {
  const dispatch = useDispatch();

  const onGetTime = useCallback(
      () => {
        dispatch(actions.getTime());
      }, [dispatch],
  );

  return (
    <SynchronizeButton onClick={ onGetTime }>GET</SynchronizeButton>
  );
}
