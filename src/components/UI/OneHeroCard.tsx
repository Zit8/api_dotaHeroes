import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import type { HeroType } from '../../types';
import { addHero } from '../../features/FavoritesSlice/FavSlice';

type HeroProps = {
  hero: HeroType;
};

export default function OneHeroCard({ hero }: HeroProps): JSX.Element {
  const [disableButton, setDisableButton] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addHero(hero));
    setDisableButton(true);
  };

  return (
    <Card
      style={{
        width: '18rem',
        borderRadius: '15px',
        borderColor: 'red',
        borderWidth: '4px',
        backgroundColor: 'red',
        opacity: '80%',
      }}
    >
      <Card.Img variant="top" src={`https://api.opendota.com${hero.img}`} />
      <Card.Body>
        <Card.Title
          style={{ color: 'white', fontSize: '25px', fontWeight: 'bold' }}
        >
          {hero.localized_name}
        </Card.Title>
        <Card.Text>Base health: {hero.base_health} hp</Card.Text>
        <Button
          disabled={disableButton}
          onClick={handleClick}
          variant="outline-dark"
        >
          В избранное
        </Button>
      </Card.Body>
    </Card>
  );
}
