import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getToken } from "../services/UserServices";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MyPet() {
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();
  const API_BASE_URL = "/api";

  useEffect(() => {
    const token = getToken();
    if (!token) {
      navigate("/signin");
      return;
    }

    axios
      .get(`${API_BASE_URL}/pets`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPets(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch user pets", error);
      });
  }, [navigate]);

  const handleDelete = (petId) => {
    const token = getToken();
    axios
      .delete(`${API_BASE_URL}/pets/${petId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setPets((prev) => prev.filter((pet) => pet.id !== petId));
      })
      .catch((err) => {
        alert("Failed to delete pet");
        console.error(err);
      });
  };

  return (
    <Container className="py-4" style={{ marginTop: "90px" }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>My Pets</h2>
        <div>
          <Button
            variant="dark"
            className="me-2"
            onClick={() => navigate("/add-pet")}
          >
            Add Pet
          </Button>
          <Button variant="dark" onClick={() => navigate("/applications")}>Applications</Button>
        </div>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {pets.map((pet) => (
          <Col key={pet.id}>
            <Card className="shadow-sm h-100">
              <Card.Img
                variant="top"
                src={pet.image}
                height="300"
                style={{ objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{pet.name}</Card.Title>
                <Card.Text>
                  <strong>Breed:</strong> {pet.breed} <br />
                  <strong>Age:</strong> {pet.age} years <br />
                  <strong>Gender:</strong> {pet.gender} <br />
                  <strong>Health:</strong> {pet.healthInfo} <br />
                  <strong>Location:</strong> {pet.location} <br />
                  <strong>Status:</strong> {pet.status}
                </Card.Text>
                {pet.status !== "ADOPTED" && (
                  <div className="d-flex justify-content-end">
                    <Button
                      variant="primary"
                      className="me-2"
                      onClick={() => navigate(`/edit-pet/${pet.id}`)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(pet.id)}
                    >
                      Delete
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MyPet;
