import React from 'react';
import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {
  
  const [inputValue, setInputValue] = useState('');

  const onChangeHandler = ({target}) => {
    setInputValue(target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const newInputValue = inputValue.trim();
    if (newInputValue.length <= 1) return;
    onNewCategory(newInputValue);
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}> {/*is the sane as (e) => onSubmit(e)*/}
      <input
        type="text"
        placeholder="Search GIFs"
        value={inputValue}
        onChange ={onChangeHandler}
      />
    </form>
  )
}
