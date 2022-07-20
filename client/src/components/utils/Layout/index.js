import React from 'react';

export default function Layout({ children }) {

  return (
    <div style={{width: '80%', margin :'auto'}}>
      <main>{children}</main>
    </div>
  );
}
