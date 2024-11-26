import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import "./VolunteerProfile.css";

const VolunteerProfile = () => {
  const [userInfo, setUserInfo] = useState({});
  const [ngoCount, setNgoCount] = useState(0);
  const [donations, setDonations] = useState({
    donations: [],
    totalAmount: 0,
  });
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const id = localStorage.getItem("user_id");

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        setLoading(true);

        // Fetch user info
        const userResponse = await axios.get(
          `http://localhost:3000/login/profile/${id}`
        );
        setUserInfo(userResponse.data);

        // Uncomment and replace endpoints if NGO count and donations data are required
        const ngosResponse = await axios.get(
          `http://localhost:3000/login/${id}/connected-ngos/count`
        );
        setNgoCount(ngosResponse.data.count);

        // const donationsResponse = await axios.get(`/api/profile/${id}/donations`);
        // setDonations(donationsResponse.data);

        // Fetch posts
        const postsResponse = await axios.get(
          `http://localhost:3000/login/profile/${id}/posts`
        );
        setPosts(postsResponse.data);

        setLoading(false);

        const donationAmt=await axios.get(`http://localhost:3000/login/profile/${id}/donation`);
        setDonations(donationAmt.data);
        setLoading(false);

      } catch (error) {
        console.error("Error loading profile data", error);
        setError("Error loading profile data");
        setLoading(false);
      }
     


    };

    fetchProfileData();
  }, [id]);

  const maxDonation = 1000; // Set a maximum donation goal for visualization

  if (loading) {
    // Center the loading spinner while data is being fetched
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  if (error) return <p>{error}</p>;

  return (
    <Container className="profile-container" sx={{ marginTop: 4 }}>
      <Grid container spacing={4}>
        {/* Left Side: Profile Information */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {userInfo.username}'s Profile
              </Typography>
              <Typography variant="body1">Email: {userInfo.email}</Typography>
              <Typography variant="body1">Role: {userInfo.role}</Typography>
              <Typography variant="body1">
                Volunteer since:{" "}
                {new Date(userInfo.createdAt).toLocaleDateString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Side: Stats and Posts */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={4}>
            {/* Connected NGOs and Donations */}
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Connected NGOs</Typography>
                  <Typography variant="h4">{ngoCount}</Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Total Donations</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 2,
                    }}
                  >
                    <div className="gauge">
                      <div
                        className="gauge-fill"
                        style={{
                          transform: `rotate(${
                            (donations.totalAmount / maxDonation) * 180
                          }deg)`,
                        }}
                      ></div>
                      <div className="gauge-cover">
                        ₹ {donations.totalAmount}
                      </div>
                    </div>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        {/* Posts Section */}
        <Card sx={{ margin: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Posts
            </Typography>
            {posts.length > 0 ? (
              <Grid container spacing={2}>
                {posts.map((post) => (
                  <Grid item xs={12} sm={6} md={4} key={post._id}>
                    <Card variant="outlined">
                      <CardContent>
                        <div className="post-thumbnail">
                          <img
                            src={post.postImg}
                            alt="post"
                            className="post-image"
                          />
                          <Typography variant="body1" className="post-title">
                            {post.postTitle}
                          </Typography>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Typography variant="body2">No posts available.</Typography>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
};

export default VolunteerProfile;
