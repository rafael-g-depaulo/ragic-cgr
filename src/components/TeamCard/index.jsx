import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Card, CardHeader, CardBody } from './styles';

export default function TeamCard({ id, title, members }) {
  const history = useNavigate();

  const handleSubmit = () => {
    // history.push(`/team/${id}`)
    history.push('/teams/');
  };

  return (
    <Card onClick={() => handleSubmit(id)}>
      <CardHeader>{title}</CardHeader>
      <CardBody>{members}</CardBody>
    </Card>
  );
}
