// Import Dependencies 
import './App.css';

// Import Components
import Song from './Song';
import Playlist from './Playlist';


// Main Application 
function App() {
  return (
    <div className="App">
      <div className = 'title-container'>
        <h1> Create a Song </h1>
      </div>
      <Playlist />
    </div>
  );
}

export default App;
