/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

import { colors } from "../../../constants/colors";

const styles = css`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 17px;
  padding: 10px;

  .navItem {
    color: ${colors.buttonColor};
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: 1px;

    &:hover {
      color: #ab5ef3;
    }
  }
`

export default function ModelNav({ nav, model }) {

  return (
    <ul css={styles}>
      {nav && nav.map((item, i) => (
        <li key={i}>
          <Link 
            to={`/model/${model?._id}/${item}`} 
            className='navItem'
          >{item}</Link>
        </li>
      ))}
    </ul>
  )
}

ModelNav.propTypes = {
  nav: PropTypes.array,
  model: PropTypes.object
}