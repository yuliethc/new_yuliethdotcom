import "./App.css";
import Principal from "./Page/Principal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Principal></Principal>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
