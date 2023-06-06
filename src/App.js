import './App.css';
import { ROUTES } from './definitions';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './views/home';
import News from './views/news';
import Post from './views/post';
import TestPost from './views/testPost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path={ROUTES.ABOUT} element={<About />} /> */}
        <Route path={ROUTES.NEWS} element={<News />} />
        <Route path={ROUTES.POST} element={<Post />} />
        <Route path={ROUTES.TESTPOST} element={<TestPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
