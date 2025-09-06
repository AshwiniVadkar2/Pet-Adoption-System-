import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import { Navigationbar } from './components/NavigationBar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import MyPet from './components/MyPet';
import Applications from './components/Applications';
import AddPet from './components/AddPet';
import MyApplications from './components/MyApplications';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import Admin from './components/Admin';
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigationbar />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<Dashboard />} />
          <Route path="/my-pets" element={<MyPet />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/add-pet" element={<AddPet />} />
          <Route path="/my-applications" element={<MyApplications />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
