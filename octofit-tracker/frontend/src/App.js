
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// Use logo from public directory

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
          <div className="card-header">Sample Table</div>
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Team</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Spider-Man</td>
                  <td>Marvel</td>
                  <td><button className="btn btn-primary">View</button></td>
                </tr>
                <tr>
                  <td>Wonder Woman</td>
                  <td>DC</td>
                  <td><button className="btn btn-primary">View</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
