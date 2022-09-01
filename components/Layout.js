import React from 'react';

export default (props) => {
  return (
    <div>
      <h1>HEADER Def. layout</h1>
      {props.children}
      <h1>FOOTER Def. layout</h1>
    </div>
  );
};
