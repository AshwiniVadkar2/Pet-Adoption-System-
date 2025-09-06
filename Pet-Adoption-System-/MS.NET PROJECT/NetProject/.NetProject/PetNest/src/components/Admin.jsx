import React, { useEffect, useState } from "react";
import axios from "axios";
import { getToken, getUserRole } from "../services/UserServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Admin() {
    const navigate=useNavigate();
  const [applications, setApplications] = useState([]);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const role = getUserRole();

    if (role !== "ROLE_ADMIN") {
      toast.error("You don't have permission to access this page.");
      navigate("/")
      return;
    }

    const token = getToken();

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
        toast.error("Failed to load applications.");
        console.error(err);
      });
  }, [navigate]);

  return (
    <div className="container"  style={{ marginTop: "6rem" }}>
      <h2 className="text-center mb-4">All Adoption Applications</h2>
      {applications.length === 0 ? (
        <p className="text-center text-muted">No applications available.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-light">
              <tr>
                <th>Pet Name</th>
                <th>Listed By</th>
                <th>Requested By</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, index) => (
                <tr key={index}>
                  <td>{app.petName}</td>
                  <td>{app.listedBy}</td>
                  <td>{app.requestedBy}</td>
                  <td>{app.date}</td>
                  <td>
                    <span
                      className={`badge ${
                        app.status === "APPROVED" ? "bg-success" : "bg-warning text-dark"
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Admin;
