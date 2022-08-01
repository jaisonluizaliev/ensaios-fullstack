import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StoreProvider } from '../store/store';
import { GlobalStyle } from '../styles/globals';
import { theme } from '../styles/theme';

export default function MyApp({
  Component,
  pageProps,
  
}) {
  
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </StoreProvider>
    </ThemeProvider>
  );
}

//  const { dispatch } = useContext(Store);

//  useEffect(() => {
//    async function load() {
//      await dispatch({
//        type: 'ALL_DATA',
//        payload: { states, regionals, subRegionals, sectors, churchs },
//      });
//    }

//    load();
//  }, []);
// export async function getServerSideProps() {
//   const { data: states } = await api.get('/states');

//   const { data: regionals } = await api.get('/regionals');

//   const { data: subRegionals } = await api.get('/sub-regionals');

//   const { data: sectors } = await api.get('/sectors');

//   const { data: churchs } = await api.get('/churchs');

//   return {
//     props: {
  //       states,
//       regionals,
//       subRegionals,
//       sectors,
//       churchs,
//     },
//   };
// }
