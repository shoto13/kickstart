import React from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from '../routes';

export default () => {
  return (
    <div style={{marginTop: '10px'}}  class="ui menu">

      <Link route="/">
        <a class="item">KickStarter</a>
      </Link>

      <div class="right menu">

        <Link route="/">
          <a class="item">Campaigns</a>
        </Link>
        <Link route="/campaigns/new">
          <a class="item">+</a>
        </Link>

      </div>
    </div>
  )
}
