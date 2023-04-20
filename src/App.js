import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Display from './pages/display';
import './App.css';
import Insert from './pages/insert';
import Delete from './pages/delete';
import Update from './pages/update';
import Show from './pages/show';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Navigate replace to="/display" />} />
          <Route path='/display' element={<Display/>} />
          <Route path='/insert' element={<Insert/>} />
          <Route path='/delete' element={<Delete/>} />
          <Route path='/update' element={<Update/>} />
          <Route path='/show' element={<Show/>} />
      </Routes>
    </Router>
  );
}

export default App;
