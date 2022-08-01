import React from 'react';
import { useRouter } from 'next/router';
import { TextFirst } from '../../../utils/Typography';
import { Image } from '../../../utils/Image';
import { Card } from '../../../utils/Card';

export default function ShowAllitems({ item }) {
  const router = useRouter();
  const { id, regional_image, regional_name } = item;
  return (
    <Card onClick={() => router.push(`/regionals/${id}`)}>
      <TextFirst>{regional_name}</TextFirst>
      <Image src={regional_image} alt={regional_name} />
    </Card>
  );
}
