
import './App.css';
import Booklist from './components/Booklist';
import WithLogging from './components/WithLogging';

function App() {
  return (
    <div className="App">
      < WithLogging>
     <Booklist />
     </WithLogging>
    </div>
  );
}

export default App;
