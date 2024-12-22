
import './App.css'
import useCounter from './hooks/useCounter'
import useToggle from './hooks/useToggle';
import useClipboard from './hooks/useClipboard';

function App() {
const {count , decrement, increment}= useCounter();

const [copy,copyText ] = useClipboard("VAKTI GELDIYINDE rABBIN SANAN GONLUNDEKINI VERECEK VE SENI HOSNUT KILACAQ")

  return (
 <div>
  <div><button onClick={increment}>Arttir</button>
  {count}
  <button onClick={decrement}>Azalt</button></div>


  <div>
    {copyText && "METIN KOPYalandi"}
    <button onClick={((e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>copy)}>Kopyala</button>
    
  </div>

 </div>
  )
}

export default App
