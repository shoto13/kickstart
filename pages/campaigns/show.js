import React, {Component} from 'react';
import {Card, Grid} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';

class CampaignShow extends Component {

  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    return{
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards() {

    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;


    const items = [
      {
        header: manager,
        meta: 'Address of Campaign Manager',
        description: 'The Manager created this campaign and can create requests on this campaign',
        style: {overflowWrap: 'break-word'}
      },
      {
        header: minimumContribution,
        meta: 'Minimum Contribution Required (wei)',
        description: 'The minimum amount of wei required to contribute to this campaign',
        style: {overflowWrap: 'break-word'}
      },
      {
        header: requestsCount,
        meta: 'Number of Requests',
        description: 'A Request is an attempt to withdraw funds from the Campaign to service the project'
      },
      {
        header: approversCount,
        meta: 'Number of approvers',
        description: 'The number of individuals who have already donated to this campaign'
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Campaign balance (Ether)',
        description: 'The balance of the Campaign which is available for use'

      }
    ];

  return <Card.Group items={items} />;
  }


  render () {
    return (
      <Layout>
        <h3>Campaign Show</h3>
        <Grid>
          <Grid.Column width={10}>
            {this.renderCards()}
          </Grid.Column>

          <Grid.Column width={6}>
            <ContributeForm address={this.props.address} />
          </Grid.Column>

        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
