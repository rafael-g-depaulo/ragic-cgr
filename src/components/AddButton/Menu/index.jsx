import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Option } from './styles';

export default function Menu() {
  const history = useNavigate();

  return (
    <Container>
      <Option onClick={() => history.push('/register/member')}>Adicionar Membro</Option>
      <Option>Criar Equipe</Option>
    </Container>
  );
}
