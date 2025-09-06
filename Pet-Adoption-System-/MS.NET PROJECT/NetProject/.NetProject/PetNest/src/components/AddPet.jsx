import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getToken, getUserRole } from "../services/UserServices";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // ✅ Direct axios import
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function AddPet() {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    breed: "",
    age: "",
    gender: "",
    healthInfo: "",
    location: "",
    image: null,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    breed: Yup.string().required("Breed is required"),
    age: Yup.number()
      .min(0, "Age must be non-negative")
      .max(50, "Age must be realistic (≤ 50)")
      .required("Age is required"),
    gender: Yup.string()
      .matches(/^(Male|Female|Other)$/, "Gender must be 'Male', 'Female', or 'Other'")
      .required("Gender is required"),
    healthInfo: Yup.string().required("Health info is required"),
    location: Yup.string().required("Location is required"),
    image: Yup.mixed().required("Image is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const token = getToken();
    const role = getUserRole();
    if (!token) {
      toast.error("You must be signed in to add a pet.");
      setSubmitting(false);
      navigate("/signin");
      return;
    }
    if (role !== "user") {
      toast.error("Only users with the 'user' role can add pets.");
      setSubmitting(false);
      return;
    }

    const formData = new FormData();
    formData.append("Name", values.name);
    formData.append("Breed", values.breed);
    formData.append("Age", values.age.toString());
    formData.append("Gender", values.gender);
    formData.append("HealthInfo", values.healthInfo);
    formData.append("Location", values.location);
    formData.append("Image", values.image);

    try {
      const response = await axios.post(
        "https://localhost:7077/api/pets",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`, // ✅ Attach the JWT token here
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Pet added successfully!");
        resetForm();
        navigate("/my-pets");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Session expired or unauthorized. Please log in again.");
        navigate("/signin");
      } else if (error.response && error.response.status === 403) {
        toast.error("You are not authorized to add pets.");
      } else {
        toast.error(error.response?.data?.message || "Failed to add pet");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container className="py-4" style={{ marginTop: "6rem" }}>
      <ToastContainer />
      <h2 className="mb-4">Add a New Pet</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form encType="multipart/form-data">
            <div className="mb-3">
              <label>Name</label>
              <Field name="name" className="form-control" />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label>Breed</label>
              <Field name="breed" className="form-control" />
              <ErrorMessage name="breed" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label>Age</label>
              <Field name="age" type="number" className="form-control" />
              <ErrorMessage name="age" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label>Gender</label>
              <Field as="select" name="gender" className="form-control">
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Field>
              <ErrorMessage name="gender" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label>Health Info</label>
              <Field name="healthInfo" className="form-control" />
              <ErrorMessage name="healthInfo" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label>Location</label>
              <Field name="location" className="form-control" />
              <ErrorMessage name="location" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label>Image</label>
              <input
                name="image"
                type="file"
                className="form-control"
                accept="image/*"
                onChange={(event) => setFieldValue("image", event.currentTarget.files[0])}
              />
              <ErrorMessage name="image" component="div" className="text-danger" />
            </div>

            <Button type="submit" variant="primary" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Add Pet"}
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default AddPet;