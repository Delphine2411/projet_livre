import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const books = [
  {
    id: 1,
    title: "Monga",
    author: "Jean-Pierre Siméon",
    description: "uniquement pour les enfants",
  },
  {
    id: 2,
    title: "Dev Web",
    author: "D-CLIC",
    description: "A rendre avant 22h42",
  },
];

function Accueil() {
  return (
    <Container className="mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Bienvenue sur la bibliothèque</h2>
        <Button variant="success">Ajouter un livre</Button>
      </div>

      <Row>
        {books.map((book) => (
          <Col key={book.id} md={6} lg={4} className="mb-4">
            <Card className="h-100 shadow">
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
                <Card.Text>{book.description}</Card.Text>
                <div className="d-flex justify-content-end gap-2">
                  <Button variant="primary" size="sm">Modifier</Button>
                  <Button variant="danger" size="sm">Supprimer</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Accueil;