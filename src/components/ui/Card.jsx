/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types"

const styles = (config) => css`
    padding: ${config.padding}px;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${config.gap}px;
    outline: #530d5c solid 1px;
    background-color: #222222;
    border-radius: 5px;
    box-shadow: #00000065 0px 10px 20px;

`

export default function Card({children, config }) {
  const defaultConfig = {
    gap: "35",
    padding: "30",
    ...config
  }

  return (
    <div css={styles(defaultConfig)}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  config: PropTypes.object
}