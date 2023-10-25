/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types";

const styles = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  label {
    color: #b9b9b9;
    font-size: 1.1rem;
    min-width: 80px;
    font-weight: 100;
  }

  input {
    width: 70%;
    min-width: 170px;
    max-width: 400px;
    padding: 7px 15px;
    border-radius: 2px;
    background-color: #161616;
    font-size: 1.1rem;
    color: #b9b9b9;

    &::placeholder {
      font-size: 1rem;
      color: #4e4e4e;
    }

    &:focus::placeholder {
      visibility: hidden;
    }
  }
`

export default function Input({
  name,
  id,
  label,
  value,
  type,
  placeholder,
  onHandle
}) {

  return (
    <div css={styles}>
      <label htmlFor={id}>{label}</label>
      <input 
        name={name}
        id={id}
        value={value}
        type={type} 
        placeholder={placeholder}
        onChange={onHandle}
      />
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onHandle: PropTypes.func.isRequired
}