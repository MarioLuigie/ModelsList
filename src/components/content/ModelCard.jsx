/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserPen, faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import PropTypes from "prop-types";

import Card from "../ui/Card";
import { colors } from "../../constants/colors";

const styles = css`
  width: 100%;

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    width: 100%;
    display: flex;

    @media screen and (min-width: 490px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: stretch;
    }
  }

  .main {
    width: 100%;
    padding: 35px 0 0;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    font-size: 1.1rem;
    color: #7a7a7a;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 0.95rem;

    @media screen and (min-width: 440px) {
      font-size: 1.1rem;
    }

    span {
      color: #cfcfcf;
      padding-left: 5px;
    }
  }

  .avatar {

  }

  .img {
    width: 90px;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    background-color: #444444;
    color: #292929;
    border-radius: 4px;

    @media screen and (min-width: 440px) {
      width: 120px;
    }
  }

  .id {
    color: #464646;
  }

  .controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
  }

  .control {
    font-size: 1.5rem;
    color: ${colors.buttonColor};
    display: flex;
    cursor: pointer;

    &--close {
      font-size: 1.8rem;
    }

    &:hover {
      color: #ab5ef3;
    }
  }

`

export default function ModelCard({ 
  model,
  onEdit
}) {
  
  return (
    <div css={styles}>
      <Card config={{gap: "20"}}>
        <div className='header'>
          <div className='id'>
            <p>ID: {model._id}</p>
          </div>
          <div className='controls'>
            <div className='control'>
              <FontAwesomeIcon icon={faUser}/>
            </div>
            <div className='control' onClick={onEdit}>
              <FontAwesomeIcon icon={faUserPen}/>
            </div>
            <div className='control control--close'>
              <FontAwesomeIcon icon={faSquareXmark} />
            </div>
          </div>
        </div>
        <div className='main'>
          <div className='info'>
            <p>Name: <span>{model.name}</span></p>
            <p>Surname: <span>{model.surname}</span></p>
            <p>Age: <span>{model.age}</span></p>
          </div>
          <div className='avatar'>
            <div className='img'>
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

ModelCard.propTypes = {
  model: PropTypes.object
}