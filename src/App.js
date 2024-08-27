import './App.css'
import Landing from './components/Landing'
import Report from './components/Report/Report'
import Analytics from './components/Analytics/Analytics'
import Alert from './components/Alert/Alert'
import Forgot from './components/Forgot/Forgot'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"

function App() {
  return (
    <Router>
      <div className="App">
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Forgot" element={<Forgot />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Landing" element={<Landing />} /> 
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/Alert" element={<Alert />} />
        <Route path="/Report" element={<Report />} />
      </Routes>
        </div>
    </Router>
        
  );
}

export default App;
