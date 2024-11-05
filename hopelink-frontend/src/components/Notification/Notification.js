import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Notification.css";

const Notifications = ({ userId, toggle }) => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dropdownRef = useRef(null); // Create a ref for the dropdown

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        toggle(); // Close the dropdown
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggle]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/ngo/get-users-requests/${userId}`
        );
        console.log(response.data);
        setNotifications(response.data);
      } catch (error) {
        console.error("Error fetching Notifications", error);
        setError("Error fetching notifications");
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, [userId]); // Adding userId as a dependency to refetch when it changes

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString(); // Format date to a readable format
  };

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      {loading ? (
        <p>Loading notifications...</p>
      ) : error ? (
        <p>Error fetching notifications: {error}</p>
      ) : notifications.length === 0 ? (
        <p>No notifications available.</p>
      ) : (
        <ul className="notifications-list">
          {notifications.map((notification) => (
            <li key={notification._id} className="notification-item">
              <div className="notification-details">
                <span>Status: {notification.status}</span>
                <span>Created At: {formatDate(notification.createdAt)}</span>
              </div>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
