/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';

import { readModels } from "../redux/actions/modelsActions";
import Wrapper from "./layout/Wrapper";

const styles = css`
  width: 100%;
  display: flex;
  justify-content: center;
`

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readModels());
  }, []);

  return (
    <div css={styles}>
      <Wrapper />
    </div>
  )
}

 
