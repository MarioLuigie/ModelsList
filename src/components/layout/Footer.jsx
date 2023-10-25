/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types";

import { gradient, colors } from "../../constants/colors";
import { footer } from "../../constants/dimensions";

const styles = css`
  width: ${footer.width}%;
  height: ${footer.height}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: ${colors.lineColor} solid 1px;

  .sign {
    background: ${gradient.purple};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 0.8rem;
  }

`

export default function Footer({ sign }) {

  return (
    <div css={styles}>
      <p className='sign'>{sign} &copy; </p>
    </div>
  )
}

Footer.propTypes = {
  sign: PropTypes.string.isRequired
}