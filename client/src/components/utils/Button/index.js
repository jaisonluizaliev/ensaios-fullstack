import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export default function ButtonComp({
  btnName,
  type = 'button',
  theme = 'primary',
  path = '/test',
}) {
  return (
    <Button theme={theme.colors} type={type}>
      <Link href={path}>{btnName}</Link>
    </Button>
  );
}
const Button = styled.button`
  /* ${(props) => console.log(props.theme)}
  background: ${({ theme: colors }) => {
    console.log(colors);
    switch (colors) {
      case 'primary':
        return 'red';
      case 'secondary':
        return 'blue';
      case 'tertiary':
        return 'brown';
      default:
        return 'red';
    }
  }}; */
  background-color: ${({ theme }) => theme.colors.main};
`;
