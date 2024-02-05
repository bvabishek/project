import logo from "./logo.svg";
import NavbarExample from "./components/Navbar";
import Table from "./components/Table/Table";
import Home from "./components/Home/Home";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
            <NavbarExample />
      <Router>

        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/home" Component={Home}/>
          <Route path="/table" Component={Table}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
