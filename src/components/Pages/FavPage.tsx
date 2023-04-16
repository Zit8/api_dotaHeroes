import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { useAppSelector } from '../../features/reduxHooks';
import OneFavorite from '../UI/OneFavorite';

export default function FavPage(): JSX.Element {
  const favorites = useAppSelector((state) => state.favSlice);

  const heroes = useAppSelector((store) => store.heroes);
  return (
    <Container style={{ justifyContent: 'center' }}>
      <Col>
        <Row className="mt-5" style={{ justifyContent: 'center' }}>
          {favorites?.map((fav) => (
            <OneFavorite key={fav.id} fav={fav} />
          ))}
        </Row>
      </Col>
    </Container>
  );
}
