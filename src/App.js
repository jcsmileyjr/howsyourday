import './App.css';
import WeightedOption from './components/weightedOption/WeightedOption';

function App() {
  return (
    <main>
      <h1>How was your day 🧐</h1>
      <p>Every day is different. Some days are a blessing and others feel like a curse. I want to know how was your day today?</p>
      <WeightedOption />
      <button type="button" className='main__button--style'>Send</button>
    </main>
  );
}

export default App;
