/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useSelector } from 'react-redux';
import { useModelContext } from '../../context/context';
import PropTypes from "prop-types";

import ModelCard from "./ModelCard";
import { scrollToTop } from "../../utils/scroll";

const styles = css`
  width: 100%;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export default function ModelsList({ mainRef }) {
  const modelsList = useSelector(store => store.modelsList);
  const { setEditingModel } = useModelContext();

  const handleEditModel = (model) => () => {
    setEditingModel(model);
    scrollToTop(mainRef);
  }

  console.log(modelsList);

  return (
    <div css={styles}>
      {modelsList?.map((model) => (
        <ModelCard 
          key={model._id} 
          model={model}
          onEdit={handleEditModel(model)}
        />
      ))}
    </div>
  )
}

ModelsList.propTypes = {
  mainRef: PropTypes.object
}