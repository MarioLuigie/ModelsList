/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from "react";

import { colors } from "../../constants/colors";
import Input from "../ui/Input";
import Card from "../ui/Card";
import Button from "../ui/Button";

const styles = css`
  width: 100%;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-bottom: ${colors.lineColor} solid 1px;

  .buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 30px;
  }
`

export default function ModelsInputs() {
  const initForm = {
    name: "",
    surname: "",
    age: ""
  }

  const [ form, setForm ] = useState(initForm);

  const handleChangeForm = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value
    });
  }

  const handleCancelForm = () => {
    setForm(initForm);
  }

  return (
    <form css={styles}>
      <Card>
        <Input 
            name="name"
            id="nameInput"
            label="Name"
            value={form.name}
            type="text"
            placeholder="Enter name"
            onHandle={handleChangeForm}
          />
          <Input 
            name="surname"
            id="surnameInput"
            label="Surname"
            value={form.surname}
            type="text"
            placeholder="Enter surname"
            onHandle={handleChangeForm}
          />
          <Input 
            name="age"
            id="ageInput"
            label="Age"
            value={form.age}
            type="number"
            placeholder="Enter age"
            onHandle={handleChangeForm}
          />
      </Card>
      <Card>
        <div className='buttons'>
          <Button label="Cancel" type="reset" onHandle={handleCancelForm}/>
          <Button label="Add" onHandle={() => {}}/>
        </div>
      </Card>
    </form>
  )
}