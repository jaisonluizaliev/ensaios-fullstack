import React from 'react';
import { useRouter } from 'next/router';
import RegionalsComp from '../../components/pages/SubRegionals';
import dynamic from 'next/dynamic';

function SectorsPage() {
  const router = useRouter();
  const {id: pid} = router.query;

  return <RegionalsComp  pid={pid}/>
}


export default dynamic(() => Promise.resolve(SectorsPage), { ssr: false });
