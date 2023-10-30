/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types";

const styles = css`

`

export default function ModelMain({
  model
}) {

  return (
    <div css={styles}>
      <p>ID: {model?._id}</p>
      <p>Name: {model?.name}</p>
      <p>Surname: {model?.surname}</p>
      <p>Age: {model?.age}</p>
    </div>
  )
}

ModelMain.propTypes = {
  model: PropTypes.object
}
