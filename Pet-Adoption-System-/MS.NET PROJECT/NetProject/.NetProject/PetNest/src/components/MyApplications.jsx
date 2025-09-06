import React, { useEffect, useState } from "react";
import axios from "axios";
import { getToken } from "../services/UserServices";
import { Container, Card, Row, Col, Spinner, Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_BASE_URL = "/api";

  const fetchApplications = async () => {
    try {
      const token = getToken();
      const response = await axios.get(
        `${API_BASE_URL}/applications/my`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setApplications(response.data);
    } catch (error) {
      console.error("Error fetching applications", error);
      setApplications([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleWithdraw = async (requestId, status) => {
    if (status !== "PENDING") {
      toast.error("Can only withdraw a PENDING application.");
      return;
    }

    try {
      const token = getToken();
      const response = await axios.delete(
        `${API_BASE_URL}/applications/${requestId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(response.data.message || "Application withdrawn");
      setApplications(applications.filter((app) => app.requestId !== requestId));
    } catch (error) {
      console.error("Withdraw failed", error);
      toast.error(error.response?.data?.message || "Failed to withdraw application");
    }
  };

  return (
    <Container className="py-5" style={{ marginTop: "6rem" }}>
      <ToastContainer position="top-center" />
      <h2 className="text-center mb-4">My Applications</h2>

      {loading ? (
        <div className="text-center mt-4">
          <Spinner animation="border" />
        </div>
      ) : applications.length === 0 ? (
        <div className="text-center text-muted fs-4 mt-5">
          No applications yet.
        </div>
      ) : (
        <Row className="justify-content-center">
          {applications.map((app) => (
            <Col key={app.requestId} md={6} lg={5} className="mb-4">
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="mb-2">{app.petName}</Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">
                    Applied on: {app.date}
                  </Card.Subtitle>
                  <Card.Text>
                    <strong>Message:</strong> {app.message}
                  </Card.Text>
                  <Card.Text>
                    <strong>Status:</strong>{" "}
                    <span
                      className={`fw-semibold ${
                        app.status === "APPROVED"
                          ? "text-success"
                          : app.status === "REJECTED"
                          ? "text-danger"
                          : "text-warning"
                      }`}
                    >
                      {app.status}
                    </span>
                  </Card.Text>

                  {app.status === "PENDING" && (
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleWithdraw(app.requestId, app.status)}
                    >
                      Withdraw
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default MyApplications;
