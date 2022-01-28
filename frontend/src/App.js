import { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import './App.css';

const baseUrl = 'http://127.0.0.1:5000';

function App() {
  const [ events, setEvents ] = useState([]);
  const [ description, setDescription ] = useState('');
  
  const handleChange = (e) => {
    const input = e.target.value;
    setDescription(input);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post(`${baseUrl}/events`, { description });
    setEvents([data.data, ...events])
  }

  const fetchEvents = async () => {
    const { data: { events } } = await axios.get(`${baseUrl}/events`);
    setEvents(events.sort((a,b) => b.id - a.id));
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <label htmlFor="description">Description</label>
          <input
            onChange={handleChange}
            type="text"
            name="description"
            id="description"
            value={description}
          />
          <button type="submit">Submit</button>
        </form>
        <ul className="events">
        {events.map(event => <li key={event.id}>{event.description}</li>)}
      </ul>
      </header>
    </div>
  );
}

export default App;
