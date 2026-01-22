import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./App.css"

import FazerAgendamento from "./components/FazerAgendamento"
import MostrarAgendamentos from "./components/MostrarAgendamentos"

function App() {
  return (
    <div className='container'>
      <ToastContainer />
      <FazerAgendamento />
      <MostrarAgendamentos/>
    </div>
  );
}

export default App;
