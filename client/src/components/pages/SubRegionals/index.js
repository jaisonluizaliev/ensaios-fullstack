import React, { useEffect, useState } from 'react';
import api from '../../../services/api';
import Layout from '../../utils/Layout';
import { Cards } from '../Home/styled';
import { Card } from '../../utils/Card';
import { Image } from '../../utils/Image/index';
import { TextFirst } from '../../utils/Typography';

import { useRouter } from 'next/router';


export default function RegionalsComp({ pid }) {
  const [subRegional, setSubRegional] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      try {
        const { data } = await api.get(`/sub-regionals/${pid}`);

        setSubRegional(data[0]);
      } catch (error) {
        alert(error);
      }
    }
    load();
  }, []);

  if(!subRegional) {
    return <Layout>Ainda em coonstrução</Layout>
  }

  return (
    <Layout>
      <Cards >
        {subRegional && (
          <Card onClick={() => router.push(`/sectors`)}>
            <TextFirst>{subRegional?.sub_regional_name}</TextFirst>
            <Image src={subRegional?.sub_regional_image} />
          </Card>
        )}
      </Cards>
    </Layout>
  );
}
