import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LineLiff = () => {
  const [profile, setProfile] = useState({
    pictureUrl: '',
    displayName: '',
    userId: '',
  });
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const initializeLiff = async () => {
      try {
        await window.liff.init({ liffId: "2005846373-pGeooAXW" });

        if (window.liff.isLoggedIn()) {
          const profile = await window.liff.getProfile();

          setProfile({
            pictureUrl: profile.pictureUrl,
            displayName: profile.displayName,
            userId: profile.userId,
          });

          setIsLoggedIn(true);
        } else {
          window.liff.login();
        }
      } catch (error) {
        console.error("LIFF initialization failed", error);
      }
    };

    initializeLiff();
  }, []);

  const sendMessage = async () => {
    try {
      if (!message) {
        alert("message not found");
        return;
      }

      const data = {
        userUid: profile.userId,
        message: message,
      };

      const response = await axios.post("https://4100228ffe74ffb11838b57a68ec5d24.serveo.net/send-message", data);
      console.log("response", response.data);
    } catch (error) {
      console.error("error", error.message);
    }
  };

  const logOut = () => {
    window.liff.logout();
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn && (
        <div id="lineprofile">
          <img width="100px" id="profileImage" src={profile.pictureUrl} alt="Profile" />
          <div>
            Hello <b><span id="profileName">{profile.displayName}</span></b>
          </div>
          <div>UID <span id="profileUID">{profile.userId}</span></div>

          <div className="message">
            <div>Send message</div>
            <input id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
          </div>
          <button onClick={logOut}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default LineLiff;
