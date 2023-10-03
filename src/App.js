import './App.css';
import Head from './Head';
import Control from './Control'
import Patient from './Patient';
import Communication from './Communication';
import Side from './Side';
function App() {
  return (
    <div className="App">
      <Head/>
      <Control/>
      <Communication/>
      <Patient/>
      <Side/>
    </div>
  );
}

export default App;
