import React from 'react';
import Head from 'next/head';
import { Container } from './Container';
import FooterComp from './Footer';
import TopNavComp from './Header';
import MainComp from './Main';

export default function Layout({ children, title }) {

  return (
    <Container>
      <Head >
        <title>{title ? title + ' || CCB Ensaios' :'CCB Ensaios' }</title>
      </Head>
      <TopNavComp />
      <MainComp>{children}</MainComp>
      <FooterComp/>
    </Container>
  );
}
