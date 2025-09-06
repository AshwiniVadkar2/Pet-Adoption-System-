import React, { useEffect, useState } from "react";
import axios from "axios";
import { getToken, getUserRole } from "../services/UserServices";
import { useNavigate } from "react-router-dom";
import { Button, Table, Modal, Form, Spinner, InputGroup, FormControl, Pagination } from "react-bootstrap";
import { toast } from "react-toastify";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [pets, setPets] = useState([]);
  const [applications, setApplications] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("users");
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    if (getUserRole() !== "Admin") {
      navigate("/");
      return;
    }
    fetchAll();
  }, [navigate]);

  const fetchAll = () => {
    setLoading(true);
    setError("");
    const token = getToken();
    Promise.all([
      axios.get(`${API_BASE_URL}/users`, { headers: { Authorization: `Bearer ${token}` } }),
      axios.get(`${API_BASE_URL}/pets`, { headers: { Authorization: `Bearer ${token}` } }),
      axios.get(`${API_BASE_URL}/applications`, { headers: { Authorization: `Bearer ${token}` } })
    ])
      .then(([usersRes, petsRes, appsRes]) => {
        setUsers(usersRes.data);
        setPets(petsRes.data);
        setApplications(appsRes.data);
      })
      .catch(() => setError("Failed to fetch data."))
      .finally(() => setLoading(false));
  };

  // Filtering
  const filteredUsers = users.filter(u =>
    u.username.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );
  const filteredPets = pets.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.type.toLowerCase().includes(search.toLowerCase())
  );
  const filteredApplications = applications.filter(a =>
    a.status.toLowerCase().includes(search.toLowerCase()) ||
    String(a.petId).includes(search) ||
    String(a.userId).includes(search)
  );

  // Pagination helpers
  const paginate = (arr) => arr.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = (arr) => Math.ceil(arr.length / itemsPerPage);

  // User actions
  const handleEditUser = (user) => {
    setEditUser(user);
    setShowEditModal(true);
  };
  const handleSaveUser = () => {
    const token = getToken();
    axios.put(`${API_BASE_URL}/users/${editUser.id}`, editUser, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => {
        toast.success("User updated!");
        setShowEditModal(false);
        fetchAll();
      });
  };
  const handleDeleteUser = (id) => {
    if (!window.confirm("Delete this user?")) return;
    const token = getToken();
    axios.delete(`${API_BASE_URL}/users/${id}`, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => {
        toast.success("User deleted!");
        fetchAll();
      });
  };

  // Pet actions
  const handleDeletePet = (id) => {
    if (!window.confirm("Delete this pet?")) return;
    const token = getToken();
    axios.delete(`${API_BASE_URL}/pets/${id}`, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => {
        toast.success("Pet deleted!");
        fetchAll();
      });
  };

  // Application actions
  const handleApprove = (id) => updateApplicationStatus(id, "Approved");
  const handleReject = (id) => updateApplicationStatus(id, "Rejected");
  const updateApplicationStatus = (id, status) => {
    const token = getToken();
    axios.put(`${API_BASE_URL}/applications/${id}/status`, { status }, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => {
        toast.success(`Application ${status}!`);
        fetchAll();
      });
  };
  const handleDeleteApplication = (id) => {
    if (!window.confirm("Delete this application?")) return;
    const token = getToken();
    axios.delete(`${API_BASE_URL}/applications/${id}`, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => {
        toast.success("Application deleted!");
        fetchAll();
      });
  };

  // Pagination controls
  const handlePageChange = (page) => setCurrentPage(page);
  const renderPagination = (arr) => (
    <Pagination>
      {[...Array(totalPages(arr)).keys()].map(i => (
        <Pagination.Item key={i+1} active={i+1 === currentPage} onClick={() => handlePageChange(i+1)}>{i+1}</Pagination.Item>
      ))}
    </Pagination>
  );

  return (
    <div className="container" style={{ marginTop: "6rem" }}>
      <h2>Admin Dashboard</h2>
      <InputGroup className="mb-3">
        <FormControl placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} />
      </InputGroup>
      <div className="mb-3">
        <Button variant={activeTab === "users" ? "primary" : "outline-primary"} onClick={() => setActiveTab("users")}>Users</Button>{' '}
        <Button variant={activeTab === "pets" ? "primary" : "outline-primary"} onClick={() => setActiveTab("pets")}>Pets</Button>{' '}
        <Button variant={activeTab === "applications" ? "primary" : "outline-primary"} onClick={() => setActiveTab("applications")}>Applications</Button>
      </div>
      {loading && <Spinner animation="border" />}
      {error && <div className="text-danger">{error}</div>}
      {activeTab === "users" && (
        <>
          <Table striped bordered>
            <thead><tr><th>ID</th><th>Username</th><th>Email</th><th>Role</th><th>Actions</th></tr></thead>
            <tbody>
              {paginate(filteredUsers).map(u => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.username}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                  <td>
                    <Button size="sm" onClick={() => handleEditUser(u)}>Edit</Button>{" "}
                    <Button size="sm" variant="danger" onClick={() => handleDeleteUser(u.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {renderPagination(filteredUsers)}
        </>
      )}
      {activeTab === "pets" && (
        <>
          <Table striped bordered>
            <thead><tr><th>ID</th><th>Name</th><th>Type</th><th>Actions</th></tr></thead>
            <tbody>
              {paginate(filteredPets).map(p => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.type}</td>
                  <td>
                    <Button size="sm" variant="danger" onClick={() => handleDeletePet(p.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {renderPagination(filteredPets)}
        </>
      )}
      {activeTab === "applications" && (
        <>
          <Table striped bordered>
            <thead><tr><th>ID</th><th>Pet</th><th>User</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              {paginate(filteredApplications).map(a => (
                <tr key={a.id}>
                  <td>{a.id}</td>
                  <td>{a.petId}</td>
                  <td>{a.userId}</td>
                  <td>{a.status}</td>
                  <td>
                    <Button size="sm" onClick={() => handleApprove(a.id)}>Approve</Button>{" "}
                    <Button size="sm" variant="warning" onClick={() => handleReject(a.id)}>Reject</Button>{" "}
                    <Button size="sm" variant="danger" onClick={() => handleDeleteApplication(a.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {renderPagination(filteredApplications)}
        </>
      )}
      {/* Edit User Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton><Modal.Title>Edit User</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control value={editUser?.username || ""} onChange={e => setEditUser({ ...editUser, username: e.target.value })} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control value={editUser?.email || ""} onChange={e => setEditUser({ ...editUser, email: e.target.value })} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSaveUser}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AdminDashboard; 