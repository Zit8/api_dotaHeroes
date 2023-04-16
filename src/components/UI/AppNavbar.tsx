import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAppDispatch } from '../../features/reduxHooks';
import {
  getHeroesThunk,
  filterHeroes,
} from '../../features/HeroSlice/heroesSlices';

export default function AppNavbar(): JSX.Element {
  const [input, setInput] = useState('');
  const dispatch = useAppDispatch();
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
    dispatch(filterHeroes(e.target.value));
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">All Heroes</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink className="nav-link" to="/">
            All Heroes
          </NavLink>
          <NavLink className="nav-link" to="/favorites">
            Favorites
          </NavLink>
          {/* <NavLink className="nav-link" to="/auth/signin">signin</NavLink>
          <NavLink className="nav-link" to="/auth/signup">signup</NavLink> */}
        </Nav>
        <InputGroup style={{ width: '600px' }}>
          <Form.Control
            value={input}
            onChange={inputHandler}
            type="text"
            name="localized_name"
            placeholder="Find by name..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Find him!
          </Button>
        </InputGroup>
      </Container>
    </Navbar>
  );
}
