import React from 'react';
import TwoColumnLayout from '../generic components/twocoloumn';
import './profilePage.css'; // Include any additional styles specific to ProfilePage

const ProfilePage = () => {
  return (
    <TwoColumnLayout
      leftComponent={
        <div>
          <h1 className="text-4xl font-bold mb-8">User Profile</h1>
          <div className="profile-container">
            <img
              src="https://via.placeholder.com/150"
              alt="User Avatar"
              className="avatar"
            />
            <div className="user-info">
              <h2 className="text-2xl font-bold mb-4">John Doe</h2>
              <p className="text-lg mb-4">Email: john@example.com</p>
              <p className="text-lg">Joined: January 1, 2022</p>
            </div>
          </div>
        </div>
      }
      rightComponent={<div>
        <h2>User Profile Options</h2>

      {/* Personal Information */}
      <div>
        <label>Personal Information:</label>
        {/* Display user's personal information */}
      </div>

      {/* Graph Usage Information */}
      <div>
        <label>Graph Usage Information:</label>
        {/* Display information related to graphs used */}
      </div>

      {/* Current Plan Information */}
      <div>
        <label>Current Plan Information:</label>
        {/* Display information about the currently running plan */}
      </div>

      {/* Plan-related Issues */}
      <div>
        <label>Plan-related Issues:</label>
        {/* Display any issues or notifications related to the current plan */}
      </div>

      {/* Upgrade or Change Plan Button */}
      <button>
        Upgrade or Change Plan
      </button>

      {/* Billing Information */}
      <div>
        <label>Billing Information:</label>
        {/* Display user's billing information */}
      </div>

      {/* Subscription History or Log */}
      <div>
        <label>Subscription History:</label>
        {/* Display a history or log of subscription changes */}
      </div>

      {/* Account Settings */}
      <div>
        <label>Account Settings:</label>
        {/* Allow users to configure account settings */}
      </div>
      </div>}
    >
      {/* Additional content specific to ProfilePage */}
    </TwoColumnLayout>
  );
};

export default ProfilePage;
