import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import { 
  BrowserRouter as Router,
  Routes,
  Route } 
from 'react-router-dom' 
// import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Login from './Components/Login';
import Home from './Components/Home';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
          </Routes>
        </div>
      </Router>
   </div>
  );
}

export default App;
