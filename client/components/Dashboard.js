import React from 'react';
import requireAuth from './requireAuth';

const Dashboard = () => {
  return (
    <h3>You are loged in.</h3>
  )
}

export default requireAuth(Dashboard);