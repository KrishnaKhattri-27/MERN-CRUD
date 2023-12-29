import logo from './logo.svg';
import './App.css';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import {Routes,Route} from "react-router-dom"
import Login from './pages/Login';

function App() {
  return (
    <div className='bg-slate-400 min-h-screen'> 
    {/* <Dashboard/> */}
      {/* <Signup/> */}
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
