import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import SignInForm from '../UI/SignInForm';
import SignUpForm from '../UI/SignUpForm';

export default function AuthPage(): JSX.Element {
  const { type } = useParams();
  return (
    <Row className="d-flex justify-content-center md-5">
      <Col md={4}>{type === 'signin' ? <SignInForm /> : <SignUpForm />}</Col>
    </Row>
  );
}
