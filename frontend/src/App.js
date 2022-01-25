import { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import './App.css';

const baseUrl = 'http://127.0.0.1:5000';

function App() {
  const [ description, setDescription ] = useState('');
  
  const handleChange = (e) => {
    const input = e.target.value;
    setDescription(input);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(description);
  }

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <label htmlFor="description">Description</label>
          <input
            onChange={handleChange}
            type="text"
            name="description"
            id="description"
            value={description}
          />
        </form>       
      </header>
    </div>
  );
}

export default App;
