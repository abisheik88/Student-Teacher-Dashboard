import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { Routes, Route } from 'react-router-dom'
import Tablepage from "./Pages/Tables/Tablepage";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainContainer">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/preview/dashboard" element={<Dashboard />} />
          <Route path="/preview/table" element={<Tablepage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
