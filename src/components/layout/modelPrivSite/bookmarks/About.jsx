/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';

import Loader from "../../../ui/Loader";

const styles = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .datas {
    width: 100%;
    text-align: center;
  }
`
export default function About({
  model
}) {
  const { isLoading, error } = useSelector(store => store.api);
  console.log(isLoading, error);

  return (
    <>
      {
        isLoading ? (
          <Loader label="Loading" />
        ) : error ? (
          <div css={styles}>
            <p>{"Sorry, but we have a problem with reading your datas"}</p>
            <p>{error.message}</p>
          </div>
        ) : (
          <div css={styles}>
            <div className='datas'>
              <p>Model: {model.name} {model.surname}</p>
              <p>Age: {model.age}</p>
            </div>
          </div>
        )
      }
    </>
  )
}

About.propTypes = {
  model: PropTypes.object
}
