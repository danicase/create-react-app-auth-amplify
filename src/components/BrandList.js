import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';

const filterBrands = /* GraphQL */ `
  query filterBrands($id: ID!) {
    listBrands(filter: { categoryID: { eq: $id } }) {
      items {
        id
        name
      }
    }
  }
`;
async function fetchBrands(id, callBack) {
  try {
    const brandsData = await API.graphql(graphqlOperation(filterBrands, id));
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
    <div style={styles.container}>
      <h2>Brands List</h2>
      {brands.map((brand, index) => (
        <div key={brand.id ? brand.id : index} style={styles.todo}>
          <p style={styles.todoName}>{brand.name}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    width: 400,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  todo: { marginBottom: 15 },
  input: {
    border: 'none',
    backgroundColor: '#ddd',
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  button: {
    backgroundColor: 'black',
    color: 'white',
    outline: 'none',
    fontSize: 18,
    padding: '12px 0px',
  },
};

export default BrandList;
