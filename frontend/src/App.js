import './App.css';
import Form from './components/Form/Form';
import Navi from './components/Navi/Navi';
import Table from './components/Table/Table';






function App() {
  return (
    <div className="main">
      <div className='main-left'>
        <Navi />
        <Table />
      </div>

      <div className='main-right'>
        <Form />
      </div>
    </div>
  );
}

export default App;
