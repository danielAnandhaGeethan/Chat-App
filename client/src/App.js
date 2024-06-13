import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Chat from "./components/Chat.jsx";

const App = () => {
  const [globalUsername, setGlobalUsername] = useState("");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              globalUsername={globalUsername}
              setGlobalUsername={setGlobalUsername}
            />
          }
        />
        <Route
          path="/home"
          element={
            <Chat
              globalUsername={globalUsername}
              setGlobalUsername={setGlobalUsername}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
