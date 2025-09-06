import React from "react";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container, Form, Button, Card } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { registerUser } from "../services/UserServices";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    role: "user"
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(
        /^(?:[A-Z][a-z]*)(?: [A-Z][a-z]*)*$/,
        "Each word must start with a capital letter and contain only letters"
      )
      .required("Name required"),
    email: Yup.string()
      .matches(
        /^[^\s@]+@gmail\.com$/,
        "Must be a valid Gmail address with no spaces"
      )
      .required("Email required"),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,14}$/,
        "Password must be 7-14 characters and include a letter, number, and special character"
      )
      .required("Password required"),
    role: Yup.string().required("Role required")
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const res = await registerUser(values);
      toast.success(res.data.message || "Registration successful!");
      resetForm();
      navigate("/signin");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed!");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", paddingTop: "100px", backgroundColor: "#f8f9fa" }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "3rem",
          background: "rgba(255, 255, 255, 0.85)",
          border: "0.1rem solid black",
          borderRadius: "2rem",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(10px)"
        }}
        className="shadow-sm border-0"
      >
        <Card.Body>
          <h2 className="mb-4 text-center">Create Account</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <FormikForm>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Field name="name" className="form-control" />
                  <ErrorMessage name="name" component="div" className="text-danger small" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Field name="email" type="email" className="form-control" />
                  <ErrorMessage name="email" component="div" className="text-danger small" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Field name="password" type="password" className="form-control" />
                  <ErrorMessage name="password" component="div" className="text-danger small" />
                </Form.Group>
                <Field type="hidden" name="role" />
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Registering..." : "Sign Up"}
                </Button>
                <div className="text-center mt-3">
                  <span>Already have an account? </span>
                  <span
                    className="text-primary"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/signin")}
                  >
                    Sign In
                  </span>
                </div>
              </FormikForm>
            )}
          </Formik>
        </Card.Body>
      </Card>
      <ToastContainer position="top-center" />
    </Container>
  );
}

export default SignUp;
