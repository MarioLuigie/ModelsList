/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types";

import { gradient, colors } from "../../constants/colors";
import { footer } from "../../constants/dimensions";
import MainControls from "../content/MainControls";

const styles = css`
  width: ${footer.width}%;
  height: ${footer.height}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
  border-top: ${colors.lineColor} solid 1px;
  flex-shrink: 0;

  .sign {
    background: ${gradient.purple};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 0.7rem;
    width: 100%;
    text-align: center;
    padding: 10px 0 0;
  }
`

export default function Footer({ sign }) {

  return (
    <div css={styles}>
      <MainControls />
      <p className='sign'>{sign} &copy; </p>
    </div>
  )
}

Footer.propTypes = {
  sign: PropTypes.string.isRequired
}