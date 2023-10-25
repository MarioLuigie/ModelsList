/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types";

import { header } from "../../constants/dimensions";
import { gradient, colors } from "../../constants/colors";

const styles = css`
  width: ${header.width}%;
  height: ${header.height}px;
  border-bottom: ${colors.lineColor} solid 1px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    background: ${gradient.purple};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Josefin Sans";
    font-size: 2.8rem;

    span {
      font-weight: 100;
    }

    @media screen and (min-width: 430px) {
      font-size: 3.3rem;
    }

    @media screen and (min-width: 460px) {
      font-size: 4rem;
    }

    @media screen and (min-width: 520px) {
      font-size: 4.8rem;
    }
  }

  .titleBorder {
    padding: 30px 45px;
    border-radius: 15px;
  }

`

export default function Header({ title }) {

  return (
    <div css={styles}>
      <div className='titleBorder'>
        <h1 className='title'>{title}<span>&reg;</span></h1>
      </div>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}