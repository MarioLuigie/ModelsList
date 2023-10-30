/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRef } from "react";
import { Routes, Route } from 'react-router-dom';

import * as dim from "../../constants/dimensions";
import { colors } from "../../constants/colors";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ModelPrivSite from './modelPrivSite/ModelPrivSite';

const styles = css`
  width: ${dim.wrapper.width}%;
  min-width: ${dim.wrapper.minWidth}px;
  max-width: ${dim.wrapper.maxWidth}px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.bgColor1};

  @media screen and (min-width: 780px) {
    width: 75%;
  }
`

export default function Wrapper() {
  const mainRef = useRef();

  return (
    <div css={styles}>
      <Header title="MAXmodels" />
      <Routes>
        <Route exact path={"/"} element={<Main ref={mainRef} mainRef={mainRef}/>}/>
        <Route path={"/model/:id/*"} element={<ModelPrivSite/>}/>
      </Routes>
      <Footer sign="ARWcode 2023" mainRef={mainRef}/>
    </div>
  )
}