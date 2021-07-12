import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { filterCampaign } from '../graphql/queries';

async function fetchCampaigns(id, callBack) {
  try {
    const campaignData = await API.graphql(
      graphqlOperation(filterCampaign, { id })
    );
    const campaign = campaignData.data.listCampaigns.items;
    callBack(campaign);
  } catch (err) {
    console.log('error fetching brands', err);
  }
}

const CampaignList = ({ brand }) => {
  const [campaigns, setCampaigns] = useState([]);
  console.log(campaigns);

  useEffect(() => {
    if (brand) {
      fetchCampaigns(brand, setCampaigns);
    } else setCampaigns([]);
  }, [brand]);

  return (
    <div className='item'>
      <h2>Current Campaign</h2>
      {campaigns.map(
        (
          { endDate, name, id, slotAvailable, slotUsed, startDate, totalSlot },
          index
        ) => (
          <div key={id ? id : index} className='margin-bottom'>
            <p className='name'>{name}</p>
            <p>Start date: {startDate || 'N/A'}</p>
            <p>End date: {endDate || 'N/A'}</p>
            <p>total Slot: {totalSlot || 'N/A'}</p>
            <p>slot available: {slotAvailable || 'N/A'}</p>
            <p>slot used: {slotUsed || 'N/A'}</p>
          </div>
        )
      )}
    </div>
  );
};

export default CampaignList;
