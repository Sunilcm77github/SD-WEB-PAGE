import React from "react";
import "./App.css";
import Header from "./components/Header";
import RouterPages from "./Router";

const App: React.FC = () => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <RouterPages />
    </>
  );
};

export default App;
