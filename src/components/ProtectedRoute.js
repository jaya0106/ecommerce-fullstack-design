// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const profile = JSON.parse(localStorage.getItem('profile'));
  if (!profile) {
    return <Navigate to="/auth" replace />;
  }
  return children;
}

export default ProtectedRoute;