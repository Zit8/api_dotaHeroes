import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import type { HeroType } from '../../types';
import { deleteFav } from '../../features/FavoritesSlice/FavSlice';

type FavProps = {
  fav: HeroType;
};

export default function OneHeroCard({ fav }: FavProps): JSX.Element {
  const dispatch = useDispatch();
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://api.opendota.com${fav.img}`} />
      <Card.Body>
        <Card.Title>{fav.localized_name}</Card.Title>
        <Card.Text>Base health: {fav.base_health} hp</Card.Text>
        <Button onClick={() => dispatch(deleteFav(fav.id))}>
          Убрать из избранного
        </Button>
      </Card.Body>
    </Card>
  );
}
