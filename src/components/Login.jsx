import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Alert, Container, Card, Spinner, InputGroup } from 'react-bootstrap';
import { PersonFill, LockFill } from 'react-bootstrap-icons'; // Icônes

function Login() {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage('');
    setErrorMessage('');
    setIsLoading(true);

    try {
      const response = await axios.post('/api/auth/login', formValues);
      setResponseMessage(response.data.message);
      // On peut rediriger vers la page d'accueil ou autre si l'utilisateur est connecté
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setErrorMessage("Identifiants invalides.");
      } else {
        setErrorMessage("Erreur serveur.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card style={{ width: '100%', maxWidth: '400px' }} className="p-4 shadow">
        <h3 className="text-center mb-4">Connexion</h3>

        {responseMessage && <Alert variant="success">{responseMessage}</Alert>}
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

        <Form onSubmit={onFormSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Adresse email</Form.Label>
            <InputGroup>
              <InputGroup.Text><PersonFill /></InputGroup.Text>
              <Form.Control
                type="email"
                name="email"
                value={formValues.email}
                onChange={onInputChange}
                placeholder="exemple@domaine.com"
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mot de passe</Form.Label>
            <InputGroup>
              <InputGroup.Text><LockFill /></InputGroup.Text>
              <Form.Control
                type="password"
                name="password"
                value={formValues.password}
                onChange={onInputChange}
                placeholder="Mot de passe"
                required
              />
            </InputGroup>
          </Form.Group>

          <div className="d-grid mb-3">
            <Button variant="primary" type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Spinner animation="border" size="sm" className="me-2" />
                  Chargement...
                </>
              ) : (
                "Se connecter"
              )}
            </Button>
          </div>

          <div className="text-center">
            <small>Pas encore de compte ? <a href="/register">Inscrivez-vous ici</a></small>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

export default Login;