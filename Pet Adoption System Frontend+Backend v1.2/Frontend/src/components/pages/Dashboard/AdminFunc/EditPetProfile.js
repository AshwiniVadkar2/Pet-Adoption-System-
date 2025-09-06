 import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import ADashNavbar from "../../../layout/ADashNavbar";
import Footer from "../../../layout/Footer";

const EditPetProfile = ({ match }) => {
  const url = 'http://localhost:8081/';
  const history = useHistory();
  const petID = match.params.petId;

  const [values, setValues] = useState({
    petId: "",
    age: "",
    bloodGroup: "",
    colourComplexity: "",
    deficiency: "",
    education: "",
    gender: "",
    medicalHistory: "",
    name: "",
    other: "",
    status: "",
    image: "",
    user_id: "",
  });

  // destructuring variables from state
  const { age, bloodGroup, colourComplexity, deficiency, education, gender, medicalHistory, name, other, status, image } = values;

  useEffect(() => {
    const getChild = () => {
      axios.get(`http://localhost:8081/admin/${petID}`)
        .then((res) => {
          setValues(res.data.data);
        })
        .catch((err) => {});
    };
    getChild();
  }, [petID]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let petData = new FormData();
    petData.append("age", age);
    petData.append("bloodGroup", bloodGroup);
    petData.append("colourComplexity", colourComplexity);
    petData.append("deficiency", deficiency);
    petData.append("education", education);
    petData.append("gender", gender);
    petData.append("medicalHistory", medicalHistory);
    petData.append("name", name);
    petData.append("other", other);
    petData.append("status", status);
    petData.append("image", image);
    petData.append("user_id", values.user_id);
    console.log([...petData]);

    try {
      const res = await axios.put(`http://localhost:8081/admin/update/${petID}`, petData);
      alert("pet Updated");
      history.push("/adminviewpets");
    } catch (err) {
      console.log(err);
      if (err.response && err.response.status === 400) alert(err.response.data);
    }
  };

  const handleImageChange = (e) => {
    setValues({ ...values, image: e.target.files[0] });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
    <div className="container" style={{marginTop:100}}>

      <ADashNavbar />
    </div>
      <div className="container mt-5">
        <div className="card shadow-lg">
          <div className="card-header bg-primary text-white text-center">
            <h4>Update Pet Profile</h4>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="age" className="fw-bold">Age</label>
                    <input
                      type="text"
                      name="age"
                      onChange={handleChange}
                      placeholder="Age"
                      className="form-control m-2"
                      value={age}
                    />

                    <label htmlFor="bloodGroup" className="fw-bold">Blood Group</label>
                    <input
                      type="text"
                      name="bloodGroup"
                      onChange={handleChange}
                      placeholder="Blood Group"
                      className="form-control m-2"
                      value={bloodGroup}
                    />

                    <label htmlFor="colourComplexity" className="fw-bold">Colour Complexity</label>
                    <textarea
                      name="colourComplexity"
                      onChange={handleChange}
                      placeholder="Colour Complexity"
                      className="form-control m-2"
                      value={colourComplexity}
                    />

                    <label htmlFor="deficiency" className="fw-bold">Deficiency</label>
                    <input
                      type="text"
                      name="deficiency"
                      onChange={handleChange}
                      placeholder="Deficiency"
                      className="form-control m-2"
                      value={deficiency}
                    />

                    <label htmlFor="education" className="fw-bold">Breed</label>
                    <input
                      type="text"
                      name="education"
                      onChange={handleChange}
                      placeholder="Education"
                      className="form-control m-2"
                      value={education}
                    />

                    <label htmlFor="gender" className="fw-bold">Gender</label>
                    <input
                      type="text"
                      name="gender"
                      onChange={handleChange}
                      placeholder="Gender"
                      className="form-control m-2"
                      value={gender}
                    />

                    <label htmlFor="medicalHistory" className="fw-bold">Medical History</label>
                    <input
                      type="text"
                      name="medicalHistory"
                      onChange={handleChange}
                      placeholder="Medical History"
                      className="form-control m-2"
                      value={medicalHistory}
                    />

                    <label htmlFor="name" className="fw-bold">Name</label>
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      placeholder="Name"
                      className="form-control m-2"
                      value={name}
                    />

                    <label htmlFor="other" className="fw-bold">Other details</label>
                    <input
                      type="text"
                      name="other"
                      onChange={handleChange}
                      placeholder="Other"
                      className="form-control m-2"
                      value={other}
                    />

                    <label htmlFor="status" className="fw-bold">Status</label>
                    <input
                      type="text"
                      name="status"
                      onChange={handleChange}
                      placeholder="Status"
                      className="form-control m-2"
                      value={status}
                    />

                    <label className="btn btn-outline-secondary btn-block m-2 text-left fw-bold">
                      Upload Image
                      <input
                        type="file"
                        name="image"
                        onChange={handleImageChange}
                        accept="image/*"
                        hidden
                      />
                    </label>
                  </div>
                  <button className="btn btn-outline-primary m-2">Update</button>
                </form>
              </div>
              <div className="col-md-4 text-center">
                <img
                  src={url + "/" + image}
                  alt=""
                  className="img-thumbnail"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Footer/>
      </div>
    </>
  );
};

export default EditPetProfile;
