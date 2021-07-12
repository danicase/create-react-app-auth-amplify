import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { filterBrands } from '../graphql/queries';

async function fetchBrands(id, callBack) {
  try {
    const brandsData = await API.graphql(
      graphqlOperation(filterBrands, { id })
    );
    const brands = brandsData.data.listBrands.items;
    callBack(brands);
  } catch (err) {
    console.log('error fetching brands', err);
  }
}

const BrandList = ({ category, selectBrand }) => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    if (category) {
      fetchBrands(category, setBrands);
    } else setBrands([]);
  }, [category]);

  return (
    <div className='item'>
      <h2>Brands List</h2>
      {brands.map((brand, index) => (
        <div
          key={brand.id ? brand.id : index}
          onClick={(e) => selectBrand(brand.id)}
          className='name-tile'
        >
          <p className='name'>{brand.name}</p>
        </div>
      ))}
    </div>
  );
};

export default BrandList;
