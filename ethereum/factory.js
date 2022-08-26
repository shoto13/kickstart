import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x8CFbF2d6C0f4C467bd78CbBFa24e0dEdcf3Ab7C1'
);

export default instance;
