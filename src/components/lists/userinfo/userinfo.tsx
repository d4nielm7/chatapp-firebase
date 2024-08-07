import React, { useEffect } from "react";
import "./userinfo.css";
import { useUserStore } from "../../../lib/userStore";

// Extend the User type if you have custom fields
interface ExtendedUser {
  avatar?: string;
  username: string;
}
interface User {
  id: string;
  email: string;
  // Add other fields as necessary
}
// A utility type to guard against nullable User
type NullableUser = User & ExtendedUser;

const UserInfo: React.FC = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();

  // Example usage: fetch user info if not already done
  useEffect(() => {
    const userId = "some-uid"; // Replace with actual user ID fetching logic
    if (!currentUser && !isLoading) {
      fetchUserInfo(userId);
    }
  }, [currentUser, isLoading, fetchUserInfo]);

  if (isLoading) {
    return <div className="userinfo">Loading...</div>;
  }

  if (!currentUser) {
    return <div className="userinfo">User not found.</div>;
  }

  // Use type assertion to avoid type error
  const user = currentUser as unknown as NullableUser;

  return (
    <div className="userinfo">
      <div className="user">
        <img src={user.avatar || "./avatar.png"} alt="User Avatar" />
        <h2>{user.username}</h2>
      </div>
      <div className="icons">
        <img src="./minus.png" alt="Remove" />
        <img src="./theme.png" alt="Change Theme" />
        <img src="./edit.png" alt="Edit Profile" />
      </div>
    </div>
  );
};

export default UserInfo;