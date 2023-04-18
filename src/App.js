import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path='/'  element={<Home />} />
          <Route path='/home' element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
