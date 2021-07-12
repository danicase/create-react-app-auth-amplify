import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { BrandList, CategoryForm } from './components';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  console.log(selectedCategory);

  return (
    <div className='App'>
      <CategoryForm selectCategory={setSelectedCategory} />
      <BrandList category={selectedCategory} />
    </div>
  );
};

export default withAuthenticator(App, true);
