import './App.css';
// import { ROUTES } from 'definitions';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="bg-video">
        <video autoPlay loop muted className="w-auto min-w-full min-h-full max-w-none">
          <source
            src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/Island%20-%204141.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <main className="content">
        <p>hihi</p>
      </main>
    </BrowserRouter>
  );
}

export default App;
