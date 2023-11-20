import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ROUTES } from './definitions';
import Home from './views/home';
import About from './views/about';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
