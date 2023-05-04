import React, { useState, useEffect } from 'react'

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context'

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [nfts, setCampaigns] = useState([]);

  const { address, contract, getNfts } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getNfts();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <DisplayCampaigns 
      title="All Campaigns"
      
      campaigns={nfts}
    />
  )
}

export default Page