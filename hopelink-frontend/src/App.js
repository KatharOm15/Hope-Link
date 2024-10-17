import "./App.css";
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
import Payment from './components/Payment/Payment';

const AppContent = () => {

  function Success() {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-green-500">Payment Successful!</h1>
      </div>
    );
  }
  
  function Failure() {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-red-500">Payment Failed!</h1>
      </div>
    );
  }



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
        </Route>
          <Route path="/payment" element={<Payment />} >
              <Route path="payment-success" element={<Success />} />
              <Route path="payment-failure" element={<Failure />} />
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
