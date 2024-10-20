import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [tempoRestante, setTempoRestante] = useState({
    dias: 30,
    horas: 0,
    minutos: 0,
    segundos: 0
  });

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTempoRestante((tempoAnterior) => {
        if (tempoAnterior.dias === 0 && tempoAnterior.horas === 0 && 
            tempoAnterior.minutos === 0 && tempoAnterior.segundos === 0) {
          clearInterval(intervalo);
          return tempoAnterior;
        }

        let { dias, horas, minutos, segundos } = tempoAnterior;

        if (segundos > 0) {
          segundos--;
        } else {
          segundos = 59;
          if (minutos > 0) {
            minutos--;
          } else {
            minutos = 59;
            if (horas > 0) {
              horas--;
            } else {
              horas = 23;
              if (dias > 0) {
                dias--;
              }
            }
          }
        }

        return { dias, horas, minutos, segundos };
      });
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="flex flex-col items-center justify-around min-w-full min-h-full mt-7 mb-7 bg-none border border-green-400 rounded-2xl p-4">
      <h1 className="text-3xl items-center font-bold mb-4">Contagem Regressiva</h1>
      <div className="flex space-x-4">
        <div className="flex flex-col items-center">
          <span className="text-5xl font-bold">{tempoRestante.dias}</span>
          <span className="text-xl">Dias</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl font-bold">{tempoRestante.horas.toString().padStart(2, '0')}</span>
          <span className="text-xl">Horas</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl font-bold">{tempoRestante.minutos.toString().padStart(2, '0')}</span>
          <span className="text-xl">Minutos</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl font-bold">{tempoRestante.segundos.toString().padStart(2, '0')}</span>
          <span className="text-xl">Segundos</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;