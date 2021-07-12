import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { filterBrands } from '../graphql/queries';

async function fetchBrands(id, callBack) {
  try {
    const brandsData = await API.graphql(
      graphqlOperation(filterBrands, { id })
    );
    const brands = brandsData.data.listBrands.items;
    console.log({ brandsData });
    callBack(brands);
  } catch (err) {
    console.log('error fetching brands', err);
  }
}

const BrandList = ({ category, selectBrands }) => {
  const [brands, setBrands] = useState([]);
  console.log(brands);

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
          onClick={(e) => selectBrands(category.id)}
          className='name-tile'
        >
          <p className='name'>{brand.name}</p>
        </div>
      ))}
    </div>
  );
};

export default BrandList;
