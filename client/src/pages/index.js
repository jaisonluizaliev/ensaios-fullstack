import React from 'react';
// import Layout from '../components/Layout/Layout';
import api from '../services/api';

export default function Index({
  states,
  regionals,
  subRegionals,
  sectors,
  churchs,
}) {
  console.log([{ states, regionals, subRegionals, sectors, churchs }]);

  const churches = churchs.map(
    (c) => (
      <div>
        
        <h4>Igreja: {c.church_name}</h4>
        <h4>Endereço: {c.church_address}</h4> <h4>Encarregado: {c.in_charge}</h4>{' '}
        <h4>
          Contato:
          {c.in_charge_contact}
        </h4>{' '}
        <h4>Dia de Ensaio: {c.rehearsal_day}</h4>
        <h4>Horário: {c.rehearsal_time}</h4>
        <h4>Administração: {c.is_adm ? 'Sim' : 'Não'}</h4>
      </div>
    )
  );

  return <>{churches}</>;
}

export async function getServerSideProps() {
  const { data: states } = await api.get('/states');

  const { data: regionals } = await api.get('/regionals');

  const { data: subRegionals } = await api.get('/sub-regionals');

  const { data: sectors } = await api.get('/sectors');

  const { data: churchs } = await api.get('/churchs');

  console.log(sectors);

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
