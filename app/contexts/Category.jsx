import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CategoryContext = React.createContext();

export function CategoryProvider({ children }) {
  const [currentCategory, setCurrentCategory] = useState('all');

  const setCategory = (cate) => {
    setCurrentCategory(cate);
  };

  return (
    <CategoryContext.Provider
      value={{
        currentCategory,
        setCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

CategoryProvider.propTypes = {
  children: PropTypes.any,
};
