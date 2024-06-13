import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Chat from "./components/Chat.jsx";

const App = () => {
  const [globalUsername, setGlobalUsername] = useState("");
  const [profile, setProfile] = useState("");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              globalUsername={globalUsername}
              setGlobalUsername={setGlobalUsername}
              profile={profile}
              setProfile={setProfile}
            />
          }
        />
        <Route
          path="/home"
          element={
            <Chat
              globalUsername={globalUsername}
              setGlobalUsername={setGlobalUsername}
              profile={profile}
              setProfile={setProfile}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
