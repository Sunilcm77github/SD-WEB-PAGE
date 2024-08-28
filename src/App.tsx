import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <Home />
    </>
  );
};

export default App;
