import React from 'react'
import { useRouter } from 'next/router';
import SectorsDynamicComp from '../../components/pages/Sectors/DinamicRoute';

export default function SectorsDynamicPage() {
  const router = useRouter();
  const { id: pid } = router.query;
  return (
    <SectorsDynamicComp pid={pid}/>
  )
}
