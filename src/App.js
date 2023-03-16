
import './App.css';
import FormContainer from './components/form-component/form';
import { useState } from 'react';
import Cards from './components/cards-component/cards';
import ConfirmedCard from './components/confirmed-component/confirmed';

function App() {
  const [inputs, setInputs] = useState()
  const [confirmedState, setConfirmedState] = useState(true)

  const setConfirmedCard = () => {
    setConfirmedState(!confirmedState)
  }

  return (
    <div className="App">
      <span className='image'></span>
      <Cards number={inputs && inputs.number.value} name={inputs && inputs.name.value} date_mm={inputs && inputs.date_mm.value} date_yy={inputs && inputs.date_yy.value} cvc={inputs && inputs.cvc.value} />
      <section className="main-form-container">
        {confirmedState === true && <ConfirmedCard onSubmit={setConfirmedCard}/>}
        {confirmedState === false && <FormContainer onSetInputs={setInputs} onSubmit={setConfirmedCard} />}
      </section>
    </div>
  );
}

export default App;
