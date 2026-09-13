import React from "react";
import Navbar from "./components/Navbar";
import CategoryBar from "./components/CategoryBar";
import UserHome from "./pages/user/UserHome";

function App() {
  return (
    <div className="app">

      {/* Main Navigation */}
      <Navbar />

      {/* Vehicle Categories */}
      <CategoryBar />

      {/* User Homepage */}
      <UserHome />

    </div>
  );
}

export default App;