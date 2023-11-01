/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faChevronLeft, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

import { scrollToTop } from "../../utils/scroll";
import { useModelContext } from '../../context/Context';
import { colors } from "../../constants/colors";
import * as actions from "../../redux/actions/modelsActions";
import ModalPortal from "../../modals/ModalPortal";

const styles = css`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .button {
    font-size: 2.8rem;
    color: ${colors.buttonColor};
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

  .button--left {
    position: absolute;
    left: 30px;
    font-size: 3rem;
  }

  .button--top {
    position: absolute;
    top: 2px;
    right: 30px;
    font-size: 3rem;
  }
`
export default function MainControls({ mainRef }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();

  const { isMainLoaded, setIsMainLoaded } = useModelContext();

  const handleCloseModal = () => {
    setIsOpenModal(false);
  }

  const handleDeleteAll = () => {
    setIsOpenModal(true);
  }

  const handleDeleteConfirmAll = () => {
    dispatch(actions.deleteAll());
    setIsOpenModal(false);
  }

  const handleOpenMain = () => {
    setIsMainLoaded(true);
  }

  return (
    <div css={styles}>
      {!isMainLoaded &&
        <div 
          className='button--left' 
          onClick={handleOpenMain}
        >
          <Link to={"/"} className="button">
            <FontAwesomeIcon icon={faChevronLeft} />
          </Link>
        </div>}
      <div 
        className="button" 
        onClick={handleDeleteAll}
      >
        <FontAwesomeIcon icon={faTrash} />
      </div>
      {isMainLoaded &&
        <div 
          className='button button--top' 
          onClick={() => scrollToTop(mainRef.current)}
        >
          <FontAwesomeIcon icon={faChevronUp}/>
        </div>}
      <ModalPortal
        msg="Delete all models?" 
        isOpen={isOpenModal} 
        onClose={handleCloseModal}
        onApply={handleDeleteConfirmAll}
      />
    </div>
  )
}

MainControls.propTypes = {
  mainRef: PropTypes.object
}