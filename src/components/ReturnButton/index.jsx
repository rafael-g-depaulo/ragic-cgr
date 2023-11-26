import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ButtonContainer, Icon } from './styles';

export default function ReturnButton() {
  const history = useNavigate();

  return (
    <ButtonContainer onClick={() => history.push('/')}>
      <Icon />
      Voltar
    </ButtonContainer>
  );
}
