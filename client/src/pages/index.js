import React, { useContext, useEffect } from 'react';
import Test from '../components/test';
import Layout from '../components/Utils/Layout';
import api from '../services/api';
import { Store } from '../store/store';

export default function Index({
  states,
  regionals,
  subRegionals,
  sectors,
  churchs,
}) {
  const { dispatch } = useContext(Store);

  useEffect(() => {
    async function load() {
      await dispatch({
        type: 'ALL_DATA',
        payload: { states, regionals, subRegionals, sectors, churchs },
      });
    }

    load();
  }, []);

 

  return (
    <Layout>
      <Test/>
    </Layout>
  );
}

export async function getServerSideProps() {
  const { data: states } = await api.get('/states');

  const { data: regionals } = await api.get('/regionals');

  const { data: subRegionals } = await api.get('/sub-regionals');

  const { data: sectors } = await api.get('/sectors');

  const { data: churchs } = await api.get('/churchs');

  return {
    props: {
      states,
      regionals,
      subRegionals,
      sectors,
      churchs,
    },
  };
}
