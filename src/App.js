import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { BrandList, CategoryList, CampaignList } from './components';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedBrand, setSelectedBrand] = useState();
  console.log({ selectedCategory, selectedBrand });

  return (
    <div className='App'>
      <CategoryList selectCategory={setSelectedCategory} />
      <BrandList category={selectedCategory} selectBrand={setSelectedBrand} />
      <CampaignList brand={selectedBrand} />
    </div>
  );
};

export default withAuthenticator(App, true);
