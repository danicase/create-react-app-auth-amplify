import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';

const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
      }
    }
  }
`;

const CategoryList = ({ selectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    try {
      const categoriesData = await API.graphql(graphqlOperation(listCategorys));
      const categories = categoriesData.data.listCategorys.items;
      setCategories(categories);
    } catch (err) {
      console.log('error fetching categories', err);
    }
  }

  return (
    <div className='item'>
      <h2>Categories</h2>
      {categories.map((category, index) => (
        <div
          key={category.id ? category.id : index}
          onClick={(e) => selectCategory(category.id)}
          className='name-tile'
        >
          <p className='name'>{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
