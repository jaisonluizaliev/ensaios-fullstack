import React, { useContext } from 'react'
import { Store } from '../store/store';

export default function Test() {
  const {state} = useContext(Store);

  return (
    <div>
      {state?.churchs?.map((c) => (
        <div key={c.id}>
          <img  width={'100%'}src={c.church_image} alt={c.church_name} />
          <h4>Igreja: {c.church_name}</h4>
          <h4>Endereço: {c.church_address}</h4>{' '}
          <h4>Encarregado: {c.in_charge}</h4>{' '}
          <h4>
            Contato:
            {c.in_charge_contact}
          </h4>{' '}
          <h4>Dia de Ensaio: {c.rehearsal_day}</h4>
          <h4>Horário: {c.rehearsal_time}</h4>
          <h4>Administração: {c.is_adm ? 'Sim' : 'Não'}</h4>
        </div>
      ))}
    </div>
  );
}
