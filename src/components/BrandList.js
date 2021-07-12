import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { filterBrands } from '../graphql/queries';

// const filterBrands = /* GraphQL */ `
//   query filterBrands($id: ID!) {
//     listBrands(filter: { categoryID: { eq: $id } }) {
//       items {
//         id
//         name
//       }
//     }
//   }
// `;
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
const BrandList = ({ category }) => {
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
        <div key={brand.id ? brand.id : index} className='margin-bottom'>
          <p className='name'>{brand.name}</p>
        </div>
      ))}
    </div>
  );
};

export default BrandList;
