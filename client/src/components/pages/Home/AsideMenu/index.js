import React from 'react';
import { Aside, MenuAside, MenuAsideItem } from './styled';

export default function AsideMenuComp() {
  return (
    <Aside>
      ainda indefinido
      <MenuAside>
        {/* <MenuAsideItem>Ensaio por Estados</MenuAsideItem>
         */}
        <MenuAsideItem>Ensaios por Regional</MenuAsideItem>
        <MenuAsideItem>Ensaios por Setores</MenuAsideItem>
        <MenuAsideItem>Ensaios por Cidades</MenuAsideItem>
      </MenuAside>
    </Aside>
  );
}
