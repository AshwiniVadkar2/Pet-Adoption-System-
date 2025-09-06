import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getToken } from "../services/UserServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function Applications() {
  const [applications, setApplications] = useState([]);
  const navigate = useNavigate();
  const API_BASE_URL = "/api";

  useEffect(() => {
    const token = getToken();
    if (!token) {
      navigate("/signin");
      return;
    }

    axios
      .get(`${API_BASE_URL}/applications`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setApplications(res.data);
      })
      .catch((err) => {
        toast.error("Failed to fetch applications");
        console.error(err);
      });
  }, [navigate]);

  const handleApprove = (appId) => {
    const token = getToken();
    axios
      .put(
        `${API_BASE_URL}/applications/${appId}/status`,
        { status: "APPROVED" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message || "Application Approved");
        setApplications((prev) =>
          prev.map((app) =>
            app.id === appId ? { ...app, status: "APPROVED" } : app
          )
        );
      })
      .catch((err) => {
        toast.error("Approval failed");
        console.error(err);
      });
  };

  const handleReject = (appId) => {
    const token = getToken();
    axios
      .put(
        `${API_BASE_URL}/applications/${appId}/status`,
        { status: "REJECTED" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message || "Application Rejected");
        setApplications((prev) =>
          prev.map((app) =>
            app.id === appId ? { ...app, status: "REJECTED" } : app
          )
        );
      })
      .catch((err) => {
        toast.error("Rejection failed");
        console.error(err);
      });
  };

  return (
    <Container className="py-4">
      <ToastContainer />
      <h2 className="mb-4">Pet Adoption Applications</h2>
      {applications.length === 0 ? (
        <p className="text-muted">No applications yet.</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Pet Name</th>
              <th>Requested By</th>
              <th>Email</th>
              <th>Message</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={app.id}>
                <td>{index + 1}</td>
                <td>{app.petName}</td>
                <td>{app.requestedByName}</td>
                <td>{app.requestedByEmail}</td>
                <td>{app.message}</td>
                <td>
                  <span className={
                    app.status === "APPROVED"
                      ? "text-success fw-bold"
                      : app.status === "REJECTED"
                      ? "text-danger fw-bold"
                      : "text-warning fw-bold"
                  }>
                    {app.status}
                  </span>
                </td>
                <td>
                  {app.status === "PENDING" ? (
                    <>
                      <Button
                        variant="success"
                        onClick={() => handleApprove(app.id)}
                        className="me-2"
                      >
                        Approve
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => handleReject(app.id)}
                      >
                        Reject
                      </Button>
                    </>
                  ) : app.status === "APPROVED" ? (
                    <span className="text-success fw-bold">Approved</span>
                  ) : (
                    <span className="text-danger fw-bold">Rejected</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}

export default Applications;
