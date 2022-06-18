import './App.css';
import WeightedOption from './components/weightedOption/WeightedOption';

function App() {
  return (
    <main>
      <h1>How was your day?</h1>
      <p>A day can be like a story; with a begining, a journey in the middle, and an end. I want to know what happen to you today. The good, bad, funny, and the ugly.</p>
      <WeightedOption />
      <button type="button">Send</button>
    </main>
  );
}

export default App;
