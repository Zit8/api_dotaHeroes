import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { getHeroesThunk } from '../../features/HeroSlice/heroesSlices';
import { useAppSelector } from '../../features/reduxHooks';
import OneHeroCard from '../UI/OneHeroCard';

export default function MainPage(): JSX.Element {
  const dispatch = useDispatch();
  const heroes = useAppSelector((store) => store.heroes);

  useEffect(() => {
    dispatch(getHeroesThunk());
  }, []);

  return (
    <Container className="mt-5" style={{ justifyContent: 'center' }}>
      <Col>
        <Row style={{ justifyContent: 'center', gap: '15px' }}>
          {heroes.heroes?.map((hero) => (
            <OneHeroCard key={hero.id} hero={hero} />
          ))}
        </Row>
      </Col>
    </Container>
  );
}
