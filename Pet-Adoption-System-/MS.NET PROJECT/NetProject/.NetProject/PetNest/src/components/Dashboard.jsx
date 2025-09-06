import React, { useEffect, useState } from "react";
import axios from "axios";
import { getToken } from "../services/UserServices";
import {
  Modal,
  Button,
  Card,
  Row,
  Col,
  Container,
  Spinner,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  const [viewPet, setViewPet] = useState(null);
  const [adoptPet, setAdoptPet] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAdoptModal, setShowAdoptModal] = useState(false);
  const [adoptMessage, setAdoptMessage] = useState("");
  const [toast, setToast] = useState({
    show: false,
    message: "",
    variant: "success",
  });

  const navigate = useNavigate();
  const API_BASE_URL = "https://localhost:7077/api";

  useEffect(() => {
    const token = getToken();
    if (!token) {
      navigate("/signin");
    } else {
      fetchPets();
    }
  }, [navigate]);

  const fetchPets = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/pets`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      setPets(response.data);
    } catch (error) {
      console.error("Error fetching pets:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPetDetails = async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/pets/${id}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      setViewPet(response.data);
      setShowModal(true);
    } catch (error) {
      console.error("Error fetching pet details:", error);
    }
  };
const handleAdoptSubmit = async () => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/adoptionrequests`, // ✅ Correct endpoint
      { petId: adoptPet.id }, // ✅ Sending only the required data
      {
        headers: {
          Authorization: `Bearer ${getToken()}`, // ✅ JWT token
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      setToast({
        show: true,
        message: "Adoption request sent!",
        variant: "success",
      });
      setShowAdoptModal(false);
      setShowModal(false);
      setAdoptMessage("");
    }
  } catch (error) {
    setToast({
      show: true,
      message:
        error.response?.data?.message || "Adoption request failed.",
      variant: "danger",
    });
  }
};

  return (
    <Container className="py-4" style={{ marginTop: "90px" }}>
      <h2 className="mb-4">Available Pets</h2>

      {loading ? (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Row>
          {pets.map((pet) => (
            <Col key={pet.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={pet.image}
                  height={200}
                  style={{ objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{pet.name}</Card.Title>
                  <Card.Text>
                    <strong>Location:</strong> {pet.location}
                  </Card.Text>
                  <div className="d-flex gap-2">
                    <Button
                      variant="primary"
                      onClick={() => fetchPetDetails(pet.id)}
                    >
                      View
                    </Button>
                    <Button
                      variant="success"
                      onClick={() => {
                        setAdoptPet(pet);
                        setShowAdoptModal(true);
                      }}
                    >
                      Adopt
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {/* Pet Detail Modal */}
      {viewPet && (
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              {viewPet.name} - {viewPet.breed}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={viewPet.image}
              alt={viewPet.name}
              className="img-fluid mb-3"
              style={{ borderRadius: "8px" }}
            />
            <p><strong>Age:</strong> {viewPet.age} year(s)</p>
            <p><strong>Gender:</strong> {viewPet.gender}</p>
            <p><strong>Health:</strong> {viewPet.healthInfo}</p>
            <p><strong>Location:</strong> {viewPet.location}</p>
            <p><strong>Status:</strong> {viewPet.status}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {/* Adoption Request Modal */}
      <Modal
        show={showAdoptModal}
        onHide={() => setShowAdoptModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Adoption Request for {adoptPet?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="adoptMessage" className="form-label">
              Message to the pet owner
            </label>
            <textarea
              className="form-control"
              id="adoptMessage"
              rows="3"
              placeholder="Explain why you want to adopt this pet..."
              value={adoptMessage}
              onChange={(e) => setAdoptMessage(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleAdoptSubmit}>
            Send Request
          </Button>
          <Button variant="secondary" onClick={() => setShowAdoptModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Toast Notification */}
      {toast.show && (
        <div
          className={`toast align-items-center text-white bg-${toast.variant} border-0 position-fixed bottom-0 end-0 m-4`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          style={{ zIndex: 9999 }}
        >
          <div className="d-flex">
            <div className="toast-body">{toast.message}</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              onClick={() => setToast({ ...toast, show: false })}
            />
          </div>
        </div>
      )}
    </Container>
  );
}

export default Dashboard;
