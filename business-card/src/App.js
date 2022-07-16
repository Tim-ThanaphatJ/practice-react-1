import logo from './logo.svg';
import './App.css';

import BusinessCard from './components/business-card/BusinessCard';

function App() {
  return (
    <div className="App">
      <div className='app_container'>
        <BusinessCard buttonStyle="2" colorStyle="dark"/>
        <BusinessCard buttonStyle="1" colorStyle="dark"/>
        <BusinessCard buttonStyle="2" colorStyle="white"/>
        <BusinessCard buttonStyle="1" colorStyle="white"/>
      </div>
    </div>
  );
}

export default App;
