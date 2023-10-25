/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types";

import Card from "../ui/Card";

const styles = css`
  width: 100%;

  .header {
    background-color: red;
    height: 80px;
    width: 100%;
  }

`

export default function Model() {

  return (
    <div css={styles}>
      <Card>
        <div className='header'>

        </div>
      </Card>
    </div>
  )
}