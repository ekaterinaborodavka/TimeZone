import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'

import * as actions from '~src/Store/actions/actions';

const Button = styled.button`
  width: 7%;
  margin: auto;
  margin-top: 10%;
  padding: 0.5rem;
  border: 1px solid rgb(45, 90, 45);
  background-color: transparent;
  border-radius: 5%;
  font-weight: bold;
  color: rgb(45, 90, 45);
  :hover{
    opacity: 0.7;
  }
`

export default function GetButton() {
  const dispatch = useDispatch();

  const onGetTime = useCallback(
      () => {
        dispatch(actions.getTime());
      }, [dispatch],
  );

  return (
    <Button onClick={ onGetTime }>GET</Button>
  );
}
