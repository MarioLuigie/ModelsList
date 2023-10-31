/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types";

const styles = css`
  width: 100%;
  height: 100%;
  display: flex;
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

  return (
    <div css={styles}>
      <div className='datas'>
        <p>Model: {model?.name} {model?.surname}</p>
        <p>Age: {model?.age}</p>
      </div>
    </div>
  )
}

About.propTypes = {
  model: PropTypes.object
}