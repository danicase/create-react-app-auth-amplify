import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { BrandList, CategoryList, CampaignList } from './components';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedBrands, setSelectedBrands] = useState();
  console.log(selectedCategory);

  return (
    <div className='App'>
      <CategoryList selectCategory={setSelectedCategory} />
      <BrandList category={selectedCategory} selectBrands={setSelectedBrands} />
      <CampaignList brands={selectedBrands} />
    </div>
  );
};

export default withAuthenticator(App, true);
