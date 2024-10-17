import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import { LoadingProvider } from "./utils/LoadingContext";
import Landing from "./components/Landing/Landing";
import Layout from "./Layout";
import Profile from "./components/Profile/Profile";
import Post from "./components/Posts/Post";

const AppContent = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Layout />} />
        <Route path="profile" element={<Profile />} />
        <Route path="post" element={<Post />} />
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
