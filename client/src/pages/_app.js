import React from 'react';
import { StoreProvider } from '../store/store';
import { GlobalStyle } from '../styles/globals';


export default function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </StoreProvider>
  );
}
