import React from 'react';
import { useState } from 'react';

export const AddCategory = ({setCategories}) => {
  
  const [inputValue, setInputValue] = useState('');

  const onChangeHandler = ({target}) => {
    setInputValue(target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setCategories((categories) => [inputValue, ...categories]);
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
