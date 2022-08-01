import React, { useEffect, useState } from 'react';
import api from '../../../services/api';
import ShowAllChurchs from './ShowAllChurchs/index';
import { Cards } from './styled';

export default function HomeComp() {
  const [regionals, setRegionals] = useState([]);
 

  useEffect(() => {
    async function load() {
      const { data } = await api.get('/regionals');
      setRegionals(data);
    }
    load();
  }, []);

  return (
    <Cards>
      {regionals?.map((church) => (
        <ShowAllChurchs key={church.id} item={church} />
      ))}
    </Cards>
  );
}
