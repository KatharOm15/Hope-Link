import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  ListItemText,
  Divider,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { CheckCircle, Cancel } from "@mui/icons-material"; // Import the icons
import axios from "axios";

const NgoProfile = () => {
  const [ngoInfo, setNgoInfo] = useState({});
  const [volunteerRequests, setVolunteerRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const ngoId = localStorage.getItem("ngo_id");

  useEffect(() => {
    const fetchNgoData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:3000/ngo/${ngoId}`);
        setNgoInfo(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching NGO data", err);
        setError("Failed to load NGO data.");
        setLoading(false);
      }
    };

    const fetchVolunteerRequests = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/ngo/${ngoId}/volunteer-requests`
        );
        setVolunteerRequests(response.data);
        console.log(response.data);
      } catch (err) {
        console.error("Error fetching volunteer requests", err);
        setError("Failed to load volunteer requests.");
      }
    };

    fetchNgoData();
    fetchVolunteerRequests();
  }, [ngoId]);

  const handleAcceptRequest = (requestId) => {
    // Make an API call to accept the request
    axios
      .post(`http://localhost:3000/ngo/${ngoId}/accept-volunteer`, {
        requestId,
      })
      .then((response) => {
        alert("Volunteer request accepted!");
        window.location.reload();
        setVolunteerRequests((prevState) =>
          prevState.filter((req) => req.id !== requestId)
        );
      })
      .catch((err) => alert("Failed to accept request"));
  };

  const handleDenyRequest = (requestId) => {
    // Make an API call to deny the request
    axios
      .post(`http://localhost:3000/ngo/${ngoId}/deny-volunteer`, { requestId })
      .then((response) => {
        alert("Volunteer request denied!");
        window.location.reload();
        setVolunteerRequests((prevState) =>
          prevState.filter((req) => req.id !== requestId)
        );
      })
      .catch((err) => alert("Failed to deny request"));
  };

  const handleLearnMore = () => {
    if (ngoInfo.website) {
      window.open(ngoInfo.website, "_blank");
    } else {
      alert("No website available for this NGO.");
    }
  };

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
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ padding: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {ngoInfo.ngoName}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                <strong>Registration Number:</strong>{" "}
                {ngoInfo.registrationNumber}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                <strong>Year of Establishment:</strong>{" "}
                {new Date(ngoInfo.yearOfEstablishment).getFullYear()}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                <strong>NGO Type:</strong> {ngoInfo.typeOfNGO}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                <strong>Location:</strong> {ngoInfo.city}, {ngoInfo.state},{" "}
                {ngoInfo.country}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                <strong>CEO:</strong> {ngoInfo.ceo}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                <strong>Contact:</strong> {ngoInfo.contactNumber}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                <strong>Email:</strong> {ngoInfo.email}
              </Typography>
              <Box mt={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleLearnMore}
                >
                  Website
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Right side: Volunteers Section */}
        <Grid item xs={12} md={6}>
          <Card sx={{ padding: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Volunteers
              </Typography>
              <Button
                variant="outlined"
                color="secondary"
                fullWidth
                onClick={() => alert("Show volunteers")}
              >
                View Volunteers
              </Button>
            </CardContent>
          </Card>

          <br />
          <Card sx={{ padding: 2, boxShadow: 3, mt: 1 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Volunteer Requests
              </Typography>
              <Grid container spacing={2}>
                {volunteerRequests.length > 0 ? (
                  volunteerRequests.map((request) => (
                    <Grid item xs={12} key={request.id}>
                      <Card sx={{ padding: 2, boxShadow: 1 }}>
                        <Grid
                          container
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Grid item xs={8}>
                            <ListItemText
                              primary={request.userId.username}
                              secondary={`Requested on: ${new Date(
                                request.createdAt
                              ).toLocaleDateString()}`}
                            />
                          </Grid>
                          <Grid item xs={4}>
                            <Box display="flex" justifyContent="flex-end">
                              <IconButton
                                color="primary"
                                onClick={() => handleAcceptRequest(request._id)}
                              >
                                <CheckCircle />
                              </IconButton>
                              <IconButton
                                color="secondary"
                                onClick={() => handleDenyRequest(request._id)}
                              >
                                <Cancel />
                              </IconButton>
                            </Box>
                          </Grid>
                        </Grid>
                      </Card>
                      <Divider />
                    </Grid>
                  ))
                ) : (
                  <Typography variant="body2" color="textSecondary" mt={3}>
                    No pending volunteer requests.
                  </Typography>
                )}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NgoProfile;