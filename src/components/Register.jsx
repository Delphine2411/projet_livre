import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Alert, Container, Card, Spinner, InputGroup } from 'react-bootstrap';
import { PersonFill, EnvelopeFill, LockFill } from 'react-bootstrap-icons'; 


function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('/api/auth/register', formData);
      setMessage(response.data.message);
      setFormData({ username: '', email: '', password: '' });
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError("Utilisateur existant ou données invalides.");
      } else {
        setError("Erreur serveur.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card style={{ width: '100%', maxWidth: '400px' }} className="p-4 shadow">
        <h3 className="text-center mb-4">Créer un compte</h3>

        {message && <Alert variant="success">{message}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nom d'utilisateur</Form.Label>
            <InputGroup>
              <InputGroup.Text><PersonFill /></InputGroup.Text>
              <Form.Control
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Entrez votre nom"
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Adresse email</Form.Label>
            <InputGroup>
              <InputGroup.Text><EnvelopeFill /></InputGroup.Text>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
                placeholder="Mot de passe"
                required
              />
            </InputGroup>
          </Form.Group>

          <div className="d-grid mb-3">
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Spinner animation="border" size="sm" className="me-2" />
                  Chargement...
                </>
              ) : (
                "S'inscrire"
              )}
            </Button>
          </div>

          <div className="text-center">
            <small>Vous avez déjà un compte ? <a href="/login">Connectez-vous ici</a></small>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

export default Register;