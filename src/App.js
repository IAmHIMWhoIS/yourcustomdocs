
import './App.css';
import Home from './Components/Home';
import Creator from './Components/Creator';
import Navbar from './Components/Navbar';
import Cover from './Components/Cover';
import Templtes from './Components/Templates';
import Privacy from './Components/Privacy';
import TC from './Components/TC';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
 
  
 
  return (
    <Router>
    <Navbar />
    <div className='App'>
    <div className='BelowNav'>
      <Routes>
        <Route key="home" path="/" element={<Home />} /> 
        <Route key="home" path="/home" element={<Home />} />     
        <Route key="creator" path="/Creator" element={<Creator />} />     
        <Route key="cover" path="/Cover" element={<Cover />} /> 
        <Route key="privacy" path="/Privacy" element={<Privacy />} />     
        <Route key="tc" path="/TC" element={<TC />} />  
        <Route key="templates" path="/Templates" element={<Templtes />} /> 
      </Routes>
    </div>
    </div>
  </Router>

  );
}

export default App;
