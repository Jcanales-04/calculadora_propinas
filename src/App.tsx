import CalculadoraPropina from './components/CalculadoraPropina';
import './index.css' 

function App() {

  return (
    <>
      <header className="bg-orange-500 py-5">
        <h1 className="text-center text-3xl font-black text-white uppercase">
          Calculadora de Propinas
        </h1>
      </header>

      <main className="">
        
        <CalculadoraPropina />
      </main>
    </>
  )
}

export default App