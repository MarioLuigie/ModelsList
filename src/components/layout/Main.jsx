/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { forwardRef } from 'react';

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

const Main = forwardRef((_, ref) => {

  return (
    <div css={styles} ref={ref}>
      <ModelsInputs />
      <ModelsList mainRef={ref}/>
    </div>
  );
});

export default Main;

