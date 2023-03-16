import React from "react";
import Reservations from "./component/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./component/Search";

function App() {
  return (
    <div className="App">
      <Search />
      <Reservations />
    </div>
  );
}

export default App;
