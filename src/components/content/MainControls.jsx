/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import * as colors from "../../constants/colors";
import * as actions from "../../redux/actions/modelsActions";
import ModalPortal from "../../modals/ModalPortal";

const styles = css`
  width: 100%;
  padding-top: 10px;
  display: flex;
  justify-content: center;

  .button {
    font-size: 2.8rem;
    color: ${colors.colors.buttonColor};
    display: flex;
    justify-content: center;
    cursor: pointer;

    &:hover {
      color: #ab5ef3;
    }

    &:active {
      transform: scale(0.95);
    }
  }
`
export default function MainControls() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    setIsOpen(false);
  }

  const handleDeleteAll = () => {
    setIsOpen(true);
  }

  const handleDeleteConfirmAll = () => {
    dispatch(actions.deleteAll());
    setIsOpen(false);
  }

  return (
    <div css={styles}>
      <div className="button" onClick={handleDeleteAll}>
        <FontAwesomeIcon icon={faTrash} />
      </div>
      <ModalPortal
        msg="Delete all models?" 
        isOpen={isOpen} 
        onClose={handleClose}
        onApply={handleDeleteConfirmAll}
      />
    </div>
  )
}