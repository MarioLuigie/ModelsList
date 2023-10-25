/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const ModelContext = createContext();

export const useModelContext = () => useContext(ModelContext);

export default function ContextProvider ({ children }) {
  const [editingModel, setEditingModel] = useState(null)

  const providerValues = {
    useModelContext,
    editingModel,
    setEditingModel
  }

  return (
    <ModelContext.Provider value={providerValues}>
      {children}
    </ModelContext.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.node
}

