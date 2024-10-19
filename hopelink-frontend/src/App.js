import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import { LoadingProvider } from "./utils/LoadingContext";
import Landing from "./components/Landing/Landing";
import Layout from "./Layout";
import Profile from "./components/Profile/Profile";
import Post from "./components/Posts/Post";
import Payment from "./components/Payment/Payment";
import Feed from "./components/Feed/Feed";
import Explore from "./components/Explore/Explore";
import Community from "./components/Community/Community";

const AppContent = () => {
  function Success() {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-green-500">
          Payment Successful!
        </h1>
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
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Explore />} />

        <Route path="/payment" element={<Payment />}>
          <Route path="payment-success" element={<Success />} />
          <Route path="payment-failure" element={<Failure />} />
        </Route>

        <Route path="/dashboard" element={<Layout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="post" element={<Post />} />
          <Route path="feed" element={<Feed />} />
          <Route path="community" element={<Community />} />
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
