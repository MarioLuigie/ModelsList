/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { colors } from "../constants/colors";

const styles = css`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0e0e0eb7;
  backdrop-filter: blur(8px);
  
  .modal {
    width: 330px;
    height: 200px;
    background-color: ${colors.bgColor2};
    outline: ${colors.outlineColor} solid 1px;
    border-radius: 5px;
    box-shadow: ${colors.boxShadow};
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .content {
    width: 100%;
    height: 55%;
    background-color: #1a1a1a;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.35rem;
    color: #e2e2e2;
  }

  .buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }

  .button {
    width: 90px;
    padding: 8px 0;
    font-size: 1.1rem;
    border-radius: 2px;
    box-shadow: #000000a6 0 0 12px;
    background-color: #a280b6;
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

export default function ModalPortal({ isOpen, onClose, onApply, msg }) {
  if(!isOpen) return null;

  return ReactDOM.createPortal(
    <div css={styles}>
      <div className='modal'>
        <div className='content'>{msg}</div>
        <div className='buttons'>
          <button className="button" onClick={onClose}>Cancel</button>
          <button className="button" onClick={onApply}>Apply</button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  )
}

ModalPortal.propTypes = {
  msg: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired
}