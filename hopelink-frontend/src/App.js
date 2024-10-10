// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import { LoadingProvider } from "./utils/LoadingContext";
import Landing from "./components/Landing/Landing";
import SignUp  from "./components/signup/Signup";
import Layout from './Layout'
import Home from './components/Home/Home';
import About from './components/About/About'
import Community from "./components/Community/Community";
import Profile from "./components/Profile/Profile"
import Post from "./components/Posts/Post";
const AppContent = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Layout/>}>
            <Route path="" element={<Home />} />
            <Route path="about" element={< About/>} />
            <Route path="community" element={< Community/>} />
            <Route path="profile" element={< Profile/>} />
            <Route path="post" element={< Post/>} />
            
            
        </Route>
      </Routes>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <AppContent />
      </LoadingProvider>
    </BrowserRouter>
  );
}

export default App;
