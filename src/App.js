import logo from './logo.svg';
import './App.css';
// import { ROUTES } from 'definitions';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-3xl font-bold underline">
        Hello world!
        </h1>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
