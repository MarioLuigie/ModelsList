/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from "react";

import { useModelContext } from '../../../context/Context';
import ModelHeader from "./ModelHeader";
import ModelNav from "./ModelNav";
import ModelMain from "./ModelMain";

const styles = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #dddddd;
`
export default function ModelWrapper() {
  const nav = [
    "about",
    "gallery",
    "contact"
  ];

  const { setIsMainLoaded } = useModelContext();

  //Get object with actual user id from path-site address in Browser
  const params = useParams();

  //Get models list from store
  const modelsList = useSelector(store => store.modelsList);

  //Find user with the same id 
  const model = modelsList.find(model => model._id === params.id);

  useEffect(() => {
    setIsMainLoaded(false);
    return (
      () => setIsMainLoaded(true)
    )
  }, []);

  return (
    <div css={styles}>
      <ModelHeader />
      <ModelNav nav={nav} model={model}/>
      <ModelMain model={model}/>
    </div>
  )
}