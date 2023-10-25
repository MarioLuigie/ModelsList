/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useSelector } from 'react-redux';

import ModelCard from "./ModelCard";

const styles = css`
  width: 100%;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export default function ModelsList() {
  const modelsList = useSelector(store => store.modelsList);

  return (
    <div css={styles}>
      {modelsList.map(model => (
        <ModelCard key={model._id} model={model}/>
      ))}
    </div>
  )
}