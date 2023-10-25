/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import * as dim from "../../constants/dimensions";
import ModelsInputs from "../content/ModelsInputs";
import ModelsList from '../content/ModelsList';


const styles = css`
  width: ${dim.main.width}%;
  min-height: calc(100vh - ${dim.header.height + dim.footer.height}px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

`

export default function Main() {

  return (
    <div css={styles}>
      <ModelsInputs />
      <ModelsList />
    </div>
  )
}
