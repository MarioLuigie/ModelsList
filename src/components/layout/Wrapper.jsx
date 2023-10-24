/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const styles = css`


`

export default function Wrapper() {

  return (
    <div css={styles}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}