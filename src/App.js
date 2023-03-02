import { useEffect, useState } from 'react';
import './App.css';

const  App = () => {

  const [config, setConfig] = useState({})

  const renderConfig = () => {
    if (config) {
      return <>
        <h1>{config.environment}</h1>
      </>
    }
  }

  useEffect(() => {
    fetch('/api/config')
      .then(response => response.json())
      .then(data => setConfig(data));
  }, []);

  return (
    <>
      <h1>Change</h1>
      {renderConfig()}
    </>
  );
}

export default App;
