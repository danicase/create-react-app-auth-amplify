import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createCampaign } from '../graphql/mutations';
import { listCampaigns } from '../graphql/queries';

const initialState = { name: '', description: '' };

const CampaignForm = () => {
  const [formState, setFormState] = useState(initialState);
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetchCampaigns();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchCampaigns() {
    try {
      const campaignsData = await API.graphql(graphqlOperation(listCampaigns));
      const campaigns = campaignsData.data.listCampaigns.items;
      console.log({ campaignsData });
      setCampaigns(campaigns);
    } catch (err) {
      console.log('error fetching campaigns');
    }
  }

  async function addCampaign() {
    console.log({ formState });
    try {
      if (!formState.name || !formState.description) return;
      const campaign = { ...formState };
      setCampaigns([...campaigns, campaign]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createCampaign, { input: campaign }));
    } catch (err) {
      console.log('error creating todo:', err);
    }
  }

  return (
    <div style={styles.container}>
      <h2>Amplify Campaigns</h2>
      <input
        onChange={(event) => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder='Name'
      />
      <input
        onChange={(event) => setInput('description', event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder='Description'
      />
      <button style={styles.button} onClick={addCampaign}>
        Create Campaign
      </button>
      {campaigns.map((todo, index) => (
        <div key={todo.id ? todo.id : index} style={styles.todo}>
          <p style={styles.todoName}>{todo.name}</p>
          <p style={styles.todoDescription}>{todo.description}</p>
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
  todoDescription: { marginBottom: 0 },
  button: {
    backgroundColor: 'black',
    color: 'white',
    outline: 'none',
    fontSize: 18,
    padding: '12px 0px',
  },
};

export default CampaignForm;
