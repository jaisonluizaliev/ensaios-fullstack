import React, { useEffect, useState } from 'react';
import {useRouter } from 'next/router';
import { Card } from '../../utils/Card';
import { Image } from '../../utils/Image';
import Layout from '../../utils/Layout';
import api from '../../../services/api';
import { TextFirst } from '../../utils/Typography';
import { Cards } from '../Home/styled';

export default function SectorsCompStatic() {
  const router = useRouter();
  const [sectors, setSectors] = useState(null);
  useEffect(() => {
    async function load() {
      const { data } = await api.get('/sectors');
      setSectors(data);
    }
    load();
  }, []);

  return (
    <Layout>
      <Cards>
        {sectors &&
          sectors.map((s) => (
            <Card key={s.id} onClick={()=> router.push(`/sectors/${s.id}`)}>
              <TextFirst>Setor: {s.sector_name}</TextFirst>
              <Image src={s.sector_image} alt={s.sector_name} />
            </Card>
          ))}
      </Cards>
    </Layout>
  );
}
