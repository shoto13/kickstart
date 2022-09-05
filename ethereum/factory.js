import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x5A3D043Db56Bf5B446c51aDa2b2e3CE77B18b986'
);

export default instance;
