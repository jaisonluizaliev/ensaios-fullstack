import React from 'react';
import Link from 'next/link';
import StaticImageLogoComp from './StaticImageLogo/StaticImageLogo';
import { TopNav } from './styled';

export default function TopNavComp({ href = '/' }) {
  return (
    <TopNav>
      <StaticImageLogoComp />
      <Link href={href} passHref style={{ cursor: 'pointer' }}>
        <a>Ensaios CCB - SC</a>
      </Link>
      <StaticImageLogoComp />
    </TopNav>
  );
}
