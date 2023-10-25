/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types";

import { colors } from "../../constants/colors";

const styles = css`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 90px;
    padding: 8px 0;
    font-size: 1.1rem;
    border-radius: 2px;
    box-shadow: #000000a6 0 0 12px;
    background-color: ${colors.buttonColor};
    cursor: pointer;
    color: #1a1a1a;

    &:hover {
      background-color: #ab5ef3;
    }

    &:active {
      transform: scale(0.95);
    }
  }

`

export default function Button({
  label,
  type,
  onHandle
}) {

  return (
    <div css={styles}>
      <button onClick={onHandle} type={type}>{label}</button>
    </div>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onHandle: PropTypes.func
}