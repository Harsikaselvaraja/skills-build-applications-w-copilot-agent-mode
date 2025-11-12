
// Use logo from public directory
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import { fetchActivities } from './api';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="Octofit Logo" className="App-logo" />
            <span style={{fontWeight:700, fontSize:'1.5rem'}}>Octofit Tracker</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/activities">Activities</a></li>
              <li className="nav-item"><a className="nav-link" href="/teams">Teams</a></li>
              <li className="nav-item"><a className="nav-link" href="/leaderboard">Leaderboard</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="App-header">
        <h1>Welcome to Octofit Tracker</h1>
        <p style={{marginTop:'1rem'}}>Track your fitness activities, join teams, and compete on the leaderboard!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main className="container mt-4">
        <div className="card">
          <div className="card-header">Activities</div>
          <div className="card-body">
            {loading ? (
              <div>Loading activities...</div>
            ) : error ? (
              <div className="alert alert-danger">{error}</div>
            ) : (
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Team</th>
                    <th>Type</th>
                    <th>Duration (min)</th>
                    <th>Timestamp</th>
                  </tr>
                </thead>
                <tbody>
                  {activities.map(act => (
                    <tr key={act._id}>
                      <td>{act.user?.name}</td>
                      <td>{act.user?.team?.name}</td>
                      <td>{act.type}</td>
                      <td>{act.duration}</td>
                      <td>{new Date(act.timestamp).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>
    </div>
  );
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchActivities()
      .then(data => {
        setActivities(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
}

  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchActivities()
      .then(data => {
        setActivities(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="Octofit Logo" className="App-logo" />
            <span style={{fontWeight:700, fontSize:'1.5rem'}}>Octofit Tracker</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/activities">Activities</a></li>
              <li className="nav-item"><a className="nav-link" href="/teams">Teams</a></li>
              <li className="nav-item"><a className="nav-link" href="/leaderboard">Leaderboard</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="App-header">
        <h1>Welcome to Octofit Tracker</h1>
        <p style={{marginTop:'1rem'}}>Track your fitness activities, join teams, and compete on the leaderboard!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main className="container mt-4">
        <div className="card">
          <div className="card-header">Activities</div>
          <div className="card-body">
            {loading ? (
              <div>Loading activities...</div>
            ) : error ? (
              <div className="alert alert-danger">{error}</div>
            ) : (
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Team</th>
                    <th>Type</th>
                    <th>Duration (min)</th>
                    <th>Timestamp</th>
                  </tr>
                </thead>
                <tbody>
                  {activities.map(act => (
                    <tr key={act._id}>
                      <td>{act.user?.name}</td>
                      <td>{act.user?.team?.name}</td>
                      <td>{act.type}</td>
                      <td>{act.duration}</td>
                      <td>{new Date(act.timestamp).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
