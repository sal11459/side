import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import History from './pages/History';
import Dashboard from './pages/Dashboard';

function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path="/" exact element ={<Home/>}></Route>
    <Route path="/Profile" exact element ={<Profile/>}></Route>
    <Route path="/Aboutus" exact element ={<Aboutus/>}></Route>
    <Route path="/Dashboard" exact element ={<Dashboard/>}></Route>
    <Route path="/History" exact element ={<History/>}></Route>
  </Routes>
  </BrowserRouter>

  </>;
}

export default App;
