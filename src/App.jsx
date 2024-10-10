import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import Props from './pagesCurso/Props';
import ExUseStates from './pagesCurso/ExUseStates';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/props" element={<Props />} />
          <Route path="/useStates" element={<ExUseStates />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/empresa" element={<Empresa />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
