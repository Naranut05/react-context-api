import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage.jsx";
import ViewProductPage from "./pages/ViewProductPage.jsx";

import { createContext } from "react";

export const userContext = createContext();

function App() {
  
  const userData = {
    username: "John",
    avatar: "https://placedog.net/100/100",
    level: "platinum",
  };

  return (
    <userContext.Provider value={userData}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/view/:id" element={<ViewProductPage />} />
          </Routes>
        </Router>
      </div>
    </userContext.Provider>
  );
}

export default App;
