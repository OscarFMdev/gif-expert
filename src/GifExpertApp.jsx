import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon ball']);

  const onAddCategory = ( newCategory ) => {
    setCategories([newCategory, ...categories]);
  }
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        // setCategories={setCategories}
        onNewCategory={ onAddCategory }
      />
      {/* <button onClick={onAddCategory}>Add</button> */}
      <ol>
        {categories.map(category => {
          return <li key={category}>{category}</li>
        }) }
      </ol>
    </>
  )
}