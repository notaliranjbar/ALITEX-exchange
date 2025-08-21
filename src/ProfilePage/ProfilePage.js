import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useUsers } from "../UsersProvider";
import "./ProfilePage.css";
import "./ProfilePageWallet.css";
import ProfileHeader from "./ProfileHeader";
import ProfileFooter from "./ProfileFooter";

const ProfilePage = () => {
  const { user, updateUserUsername, updateUserPhonenumber, updateUserPassword , updateUser } = useUsers();
  const location = useLocation();

  const initialTab = location.state?.tab || "profile";
  const [selected, setSelected] = useState(initialTab);
  const [newPhone, setNewPhone] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  React.useEffect(() => {
    if (user) {
      setNewPhone(user.phone || "");
      setNewUsername(user.username || "");
      setNewPassword(user.password || "");
    }
  }, [user]);

  const handleSave = async () => {
    if (!user) return;

    const updatedUser = {
        ...user,
        username: newUsername,
        phone: newPhone,
        password: newPassword,
    };

    try {
        await updateUser(updatedUser);
    } catch (err) {
        console.error(err);
        alert("Failed to update profile ");
    }
    };

  const ownedCurrencies = user?.ownedCurrencies || [];
  if (!user) {
    return <div className="profile-loading">404 not Found</div>;
  }

  return (
    <div className="profile">
      <ProfileHeader />

      <div className="profile-page">
        <div className="sidebar">
          <div
            className={`sidebar-item ${selected === "profile" ? "selected" : ""}`}
            onClick={() => setSelected("profile")}
          >
            Profile
          </div>
          <div
            className={`sidebar-item ${selected === "wallet" ? "selected" : ""}`}
            onClick={() => setSelected("wallet")}
          >
            Wallet
          </div>
        </div>

        <div className="profile-content">
          {selected === "profile" && (
            <div className="profile-card">
              <h2 className="profile-title">Profile</h2>

              <label>Phone Number</label>
              <input
                type="text"
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
                className="profile-input"
              />

              <label>Username</label>
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                className="profile-input"
              />

              <label>Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="profile-input"
              />

              <button onClick={handleSave} className="profile-btn save-btn">
                Save Changes
              </button>
            </div>
          )}

          {selected === "wallet" && (
            <div className="wallet-container">
              <h2 className="wallet-title">My Wallet</h2>
              <div className="profile-wallet-list">
                {ownedCurrencies.length > 0 ? (
                  ownedCurrencies.map((currency, index) => (
                    <div key={index} className="wallet-item">
                      <img
                        src={`/Icons/${currency.name.toLowerCase()}.svg`}
                        alt={currency.name}
                        className="wallet-icon"
                      />
                      <div className="wallet-info">
                        <p className="wallet-name">{currency.name}</p>
                        <p className="wallet-amount">
                          Amount: {currency.amountOwned.toFixed(4)}
                        </p>
                        <p className="wallet-price">Price: ${currency.price}</p>
                      </div>
                      <button className="wallet-item-trade">Trade</button>
                    </div>
                  ))
                ) : (
                  <div className="wallet-empty">No currencies in wallet</div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <ProfileFooter />
    </div>
  );
};

export default ProfilePage;
