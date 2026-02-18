import { useState } from 'react';

const CalculadoraPropina = () => {
  // Tipamos los estados para que TypeScript esté feliz
  const [cuenta, setCuenta] = useState<string>('');
  const [porcentaje, setPorcentaje] = useState<number>(15);
  const [propina, setPropina] = useState<string>('0.00');
  const [total, setTotal] = useState<string>('0.00');

  const calcularTodo = () => {
    const valorCuenta = parseFloat(cuenta);
    if (isNaN(valorCuenta) || valorCuenta <= 0) {
      alert("Por favor, ingresa un monto válido.");
      return;
    }

    const calculoPropina = valorCuenta * (porcentaje / 100);
    const calculoTotal = valorCuenta + calculoPropina;

    setPropina(calculoPropina.toFixed(2));
    setTotal(calculoTotal.toFixed(2));
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md border border-slate-200">
       
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
              Monto de la Factura
            </label>
            <input
              type="number"
              placeholder="0.00"
              className="w-full bg-slate-50 p-4 rounded-2xl border-2 border-transparent focus:border-gray-400 focus:bg-white outline-none transition-all text-xl font-medium"
              value={cuenta}
              onChange={(e) => setCuenta(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">
              Porcentaje Sugerido
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[10, 15, 20].map((num) => (
                <button
                  key={num}
                  onClick={() => setPorcentaje(num)}
                  className={`py-3 rounded-xl font-bold transition-all ${
                    porcentaje === num 
                    ? 'bg-yellow-400 text-white scale-105 shadow-lg shadow-blue-200' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {num}%
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={calcularTodo}
            className="w-full bg-slate-900 hover:bg-black text-white font-bold py-4 rounded-2xl transition-all active:scale-[0.98] shadow-xl"
          >
            Calcular Propina
          </button>

          {/* Resultados visibles */}
          <div className="pt-6 border-t border-slate-100 space-y-3">
            <div className="flex justify-between text-slate-500 font-medium">
              <span>Propina ({porcentaje}%):</span>
              <span>${propina}</span>
            </div>
            <div className="flex justify-between items-center bg-blue-50 p-5 rounded-2xl">
              <span className="text-gray-900 font-bold text-lg">Total final:</span>
              <span className="text-3xl font-black text-black">${total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculadoraPropina;