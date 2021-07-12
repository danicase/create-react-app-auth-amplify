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
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <CategoryForm selectCategory={setSelectedCategory} />
        <BrandList category={selectedCategory} />
      </header>
    </div>
  );
};

export default withAuthenticator(App, true);
