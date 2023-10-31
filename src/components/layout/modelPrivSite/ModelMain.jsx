/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types";
import { Routes, Route } from 'react-router-dom';

import About from "./bookmarks/About";
import Gallery from "./bookmarks/Gallery";
import Contact from "./bookmarks/Contact";

const styles = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function ModelMain({
  model
}) {

  return (
    <div css={styles}>
      <Routes>
        <Route path={"/about"} element={<About model={model}/>}/>
        <Route path={"/gallery"} element={<Gallery model={model}/>}/>
        <Route path={"/contact"} element={<Contact model={model}/>}/>
      </Routes>
    </div>
  )
}

ModelMain.propTypes = {
  model: PropTypes.object
}
