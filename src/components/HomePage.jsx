// Homepage.jsx

import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from './firebaseConfig';

const Homepage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // State to manage loading indicator

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false); // Set loading to false once authentication state is determined
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Display loading indicator while waiting for auth state
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2>Welcome, {user.email}</h2>
      <p>User ID: {user.uid}</p>
      {/* Display other user information as needed */}
    </div>
  );
};

export default Homepage;
