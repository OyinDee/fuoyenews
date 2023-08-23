import logo from './logo.svg';
import './App.css';
import './App.css';
import {Routes, Route, Navigate} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import Homepage from './components/Homepage'
import Effect from "./components/Effect"
import axios from "axios"
import UserLogin from './components/Userlogin'
import Usersignup from './components/Usersignup';
import Home from './components/Home'
import ToBeApproved from './components/Home';
import AdminDashboard from './components/Admindashboard';

function App() {

    return(
        <>
        <Routes>
        <Route path='/rubik' element={<ToBeApproved/>}/>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/signup" element={<Usersignup/>}/>
        <Route path="/userlogin" element={<UserLogin/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
        </Routes>
  </>
    );
  }

export default App;
