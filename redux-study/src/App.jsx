import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const cash = useSelector((state) => state.cash);
  const dispatch = useDispatch();

  function addCash(cash) {
    dispatch({ type: 'ADD CASH', payload: cash });
  }

  function getCash(cash) {
    dispatch({ type: 'GET CASH', payload: cash });
  }

  return (
    <>
      <div className='wrapper'>
        <div className='output'>{cash}</div>
        <button onClick={() => addCash(Number(prompt()))}>ADD CASH</button>
        <button onClick={() => getCash(Number(prompt()))}>GET CASH</button>
      </div>
    </>
  );
}

export default App;
