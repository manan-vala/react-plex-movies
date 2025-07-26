import { useState } from "react";
import Nav from "./Nav";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <Nav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <Outlet context={{ searchQuery }} />
    </div>
  );
}

export default App;
