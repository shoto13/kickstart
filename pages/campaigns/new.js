import React, {Component} from 'react';
import {Form, Button, Input} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import Web3 from '../../ethereum/web3';

class CampaignNew extends Component {
  state = {
    minimumContribution: ''
  };

  onSubmit = async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();
    await factory.methods
      .createCampaign(this.state.minimumContribution)
      .send({
        from: accounts[0]
      });
  };



  render () {
    return (
      <Layout>
        <h1>Create a Campaign</h1>

        <Form onSubmit={this.onSubmit} class="ui form">
          <div class="field">
            <label>Minimum Contribution</label>
            <Input
              label="wei"
              labelPosition="right"
              placeholder="Amount"
              value={this.state.minimumContribution}
              onChange={event =>
                 this.setState({minimumContribution: event.target.value})}
            />
          </div>
          <Button
            content="Create Campaign"
            primary
          />
        </Form>

      </Layout>
    );
  }
}

export default CampaignNew;
