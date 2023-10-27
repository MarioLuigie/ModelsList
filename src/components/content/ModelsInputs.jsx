/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';

import * as actions from "../../redux/actions/modelsActions";
import { useModelContext } from '../../context/Context';
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

  const { editingModel, setEditingModel } = useModelContext();
  const [ form, setForm ] = useState(initForm);
  const dispatch = useDispatch();

  useEffect(() => {
    if(editingModel) {
      const { name, surname, age, _id} = editingModel;
      setForm({
        name,
        surname,
        age,
        _id
      });
    }
  }, [editingModel]);

  const handleChangeForm = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value
    });
  }

  const handleCancelForm = () => {
    setForm(initForm);
    setEditingModel(null);
  }

  const handleCreateModel = (evt) => {
    const { name, surname, age } = form;

    evt.preventDefault();
    dispatch(actions.createModel({ name, surname, age }));
    handleCancelForm();
  }

  const handleUpdateConfirmModel = (evt) => {
    evt.preventDefault();
    dispatch(actions.updateModel(form, editingModel._id));
    handleCancelForm();
  }

  return (
    <form css={styles} onSubmit={handleCreateModel}>
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
            value={String(form.age)}
            type="number"
            placeholder="Enter age"
            onHandle={handleChangeForm}
          />
      </Card>
      <Card>
        <div className='buttons'>
          <Button 
            label="Cancel" 
            type="reset" 
            onHandle={handleCancelForm}
          />
          {editingModel 
            ? <Button 
              type="button" 
              label="Update" 
              onHandle={handleUpdateConfirmModel}
            />
            : <Button label="Add"/>
          }
        </div>
      </Card>
    </form>
  )
}