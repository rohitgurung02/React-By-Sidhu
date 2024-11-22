import React, { useEffect, useState } from 'react';

const App = () => {
  const [joke, setJoke] = useState(null); // Start with `null` since we expect a single object.

  const fetchJoke = async () => {
    try {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await response.json();
      setJoke(data); // Set the response directly to `joke`.
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: 20
    }}>
      <table border="2">
        <thead>
          <tr>
            <th>ID</th>
            <th>Punchline</th>
            <th>Setup</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {joke ? ( // Ensure `joke` is not null before rendering.
            <tr >
              <td>{joke.id}</td>
              <td>{joke.punchline}</td>
              <td>{joke.setup}</td>
              <td>{joke.type}</td>
            </tr>
          ) : (
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
