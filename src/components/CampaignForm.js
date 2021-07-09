import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createCategory } from '../graphql/mutations';
import { listCategorys } from '../graphql/queries';

const initialState = { name: '' };

const CampaignForm = () => {
  const [formState, setFormState] = useState(initialState);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchCategories() {
    try {
      const categoriesData = await API.graphql(graphqlOperation(listCategorys));
      const categories = categoriesData.data.listCategorys.items;
      console.log({ categoriesData });
      setCategories(categories);
    } catch (err) {
      console.log('error fetching campaigns');
    }
  }

  async function addCampaign() {
    console.log({ formState });
    try {
      if (!formState.name) return;
      const category = { ...formState };
      setCategories([...categories, category]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createCategory, { input: category }));
    } catch (err) {
      console.log('error creating todo:', err);
    }
  }

  return (
    <div style={styles.container}>
      <h2>Amplify Categories</h2>
      <input
        onChange={(event) => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder='Name'
      />
      <button style={styles.button} onClick={addCampaign}>
        Create Campaign
      </button>
      {categories.map((category, index) => (
        <div key={category.id ? category.id : index} style={styles.todo}>
          <p style={styles.todoName}>{category.name}</p>
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

export default CampaignForm;
