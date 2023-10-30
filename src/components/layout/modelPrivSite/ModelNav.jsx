/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import About from "./bookmarks/About";
import Gallery from "./bookmarks/Gallery";
import Contact from "./bookmarks/Contact";

const styles = css`
  list-style: none;
  display: flex;
  gap: 10px;

  .navItem {
    color: #cc6acc;
    text-decoration: none;
    font-size: 1.4rem;
  }

`

export default function ModelNav({ nav, model }) {

  return (
    <>
      <ul css={styles}>
        {nav && nav.map((item, i) => (
          <li key={i}>
            <Link to={`/model/${model?._id}/${item}`} className='navItem'>{item}</Link>
          </li>
        ))}
    </ul>
    <div>
      <Routes>
        <Route path={"/about"} element={<About />}/>
        <Route path={"/gallery"} element={<Gallery />}/>
        <Route path={"/contact"} element={<Contact />}/>
      </Routes>
    </div>
    </>
  )
}

ModelNav.propTypes = {
  nav: PropTypes.array,
  model: PropTypes.object
}