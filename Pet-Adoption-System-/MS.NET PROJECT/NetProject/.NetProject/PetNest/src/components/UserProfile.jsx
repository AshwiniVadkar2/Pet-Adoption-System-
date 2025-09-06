import React, { useEffect, useState } from "react";
import axios from "axios";
import { getToken, getUserById } from "../services/UserServices";
import { toast } from "react-toastify";
import { Spinner, Form, Button, Container } from "react-bootstrap";

const API_BASE_URL = "https://localhost:7077/api";

function getUserIdFromToken() {
  try {
    const token = getToken();
    if (!token) return null;
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.nameid || payload.sub || payload.Id || null;
  } catch {
    return null;
  }
}

function UserProfile() {
  const [user, setUser] = useState({ username: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const userId = getUserIdFromToken();
    if (!userId) {
      setError("Could not determine user ID.");
      return;
    }
    setLoading(true);
    getUserById(userId)
      .then(res => setUser(res.data))
      .catch(() => setError("Failed to fetch user info."))
      .finally(() => setLoading(false));
  }, []);

  const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSave = () => {
    const userId = getUserIdFromToken();
    if (!userId) {
      toast.error("Could not determine user ID.");
      return;
    }
    setSaving(true);
    axios.put(`${API_BASE_URL}/users/${userId}`, user, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
      .then(() => toast.success("Profile updated!"))
      .catch(() => toast.error("Failed to update profile."))
      .finally(() => setSaving(false));
  };

  return (
    <Container style={{ marginTop: "6rem", maxWidth: 500 }}>
      <h2 className="mb-4">Edit Profile</h2>
      {loading ? (
        <Spinner animation="border" />
      ) : error ? (
        <div className="text-danger">{error}</div>
      ) : (
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              value={user.username}
              onChange={handleChange}
              placeholder="Username"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
            />
          </Form.Group>
          <Button onClick={handleSave} disabled={saving}>
            {saving ? "Saving..." : "Save"}
          </Button>
        </Form>
      )}
    </Container>
  );
}

export default UserProfile; 