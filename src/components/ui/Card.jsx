/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types"

const styles = css`
    padding: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    outline: #530d5c solid 1px;
    background-color: #222222;
    border-radius: 5px;
    box-shadow: #00000065 0px 10px 20px;

`

export default function Card({ children }) {

  return (
    <div css={styles}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node
}