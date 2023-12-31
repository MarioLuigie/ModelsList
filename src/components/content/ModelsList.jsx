/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useModelContext } from '../../context/Context';
import PropTypes from "prop-types";

import * as actions from "../../redux/actions/modelsActions";
import { scrollToTop } from "../../utils/scroll";
import ModelCard from "./ModelCard";
import ModalPortal from '../../modals/ModalPortal';
import Loader from "../ui/Loader";

const styles = css`
  width: 100%;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export default function ModelsList({ mainRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const { setEditingModel } = useModelContext();
  const modelsList = useSelector(store => store.modelsList);
  const { isLoading, error } = useSelector(store => store.api);
  const dispatch = useDispatch();

  const handleClose = () => {
    setIsOpen(false);
  }

  const handleEditModel = (model) => () => {
    setEditingModel(model);
    scrollToTop(mainRef.current);
  }

  const handleDeleteSelected = (id) => () => {
    setSelectedId(id);
    setIsOpen(true);
  }

  const handleDeleteConfirmSelected = () => {
    dispatch(actions.deleteModel(selectedId));
    setIsOpen(false);
  }

  return (
    <div css={styles}>
      {
        isLoading ? (
          <Loader label="Loading" />
        ) : error ? (
          <div css={styles}>
            <p>{"Sorry, but we have a problem with reading your datas"}</p>
            <p>{error.message}</p>
          </div>
        ) : (
          modelsList.map((model) => (
            <ModelCard 
              key={model._id} 
              model={model}
              onEdit={handleEditModel(model)}
              onDelete={handleDeleteSelected(model._id)}
            />
          ))
        )
      }
      <ModalPortal
        msg="Delete selected model?" 
        isOpen={isOpen} 
        onClose={handleClose}
        onApply={handleDeleteConfirmSelected}
      />
    </div>
  )
}

ModelsList.propTypes = {
  mainRef: PropTypes.object
}