import { useState } from 'react';
import { levels, calculateImc, Level } from './helpers/imc';
import { GridItem } from './components/GridItem';
import leftArrowImage from './assets/leftarrow.png';
import powered from './assets/powered.png';

function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>();

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    } else {
      alert('Digite todos os campos.')
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div>
      <header className='px-5 md:px-0'>
        <div className='max-w-[1000px] mx-auto my-10'>
          <img src={powered} width={160}/>
        </div>
      </header>
      <div className='px-5 md:px-0 max-w-[1000px] flex flex-col md:flex-row mx-auto'>
        <div className='flex-1 md:mr-10'>
          <h1 className='text-[46px] text-[#3a4b5c] font-semibold'>
            Calcule o seu IMC.
            </h1>
          <p className='text-[#6a7d8b] text-[18px] leading-tight mb-10'>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
          </p>

          <input
          type="number"
          placeholder="Digite sua altura. Ex: 1.58 (em metros)"
          className='flex flex-col w-full px-[2px] py-2 mb-5 border-b-[2px] border-[#96a3ab81] disabled:opacity-50'
          value={heightField > 0 ? heightField : ''}
          onChange={e => setHeightField(parseFloat(e.target.value))}
          disabled={toShow ? true : false}
          />

          <input
          type="number"
          placeholder="Digite seu peso. Ex: 75.3 (em kg)"
          className='flex flex-col w-full px-[2px] py-2 mb-5 border-b-[2px] border-[#96a3ab81] disabled:opacity-50'
          value={weightField > 0 ? weightField : ''}
          onChange={e => setWeightField(parseFloat(e.target.value))}
          disabled={toShow ? true : false}
          />
          <button
          className="bg-[#227C9D] text-white text-[15px] rounded-lg p-4 w-full mt-10 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleCalculateButton}
          disabled={toShow ? true : false}>
            Calcular
          </button>
        </div>
        <div className='flex-1 md:ml-10 mt-[50px] md:mt-0'>
        {!toShow && 
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {levels.map((item, index) => (
              <GridItem key={index} item={item} />
            ))}
          </div>
          }
          {toShow &&
            <div className="flex h-full">
              <div className="absolute bg-[#227c9d] p-6 rounded-md md:rounded-[50%] flex align-middle justify-center cursor-pointer md:-ml-8 md:mt-[160px] hover:bg-[#006699]" onClick={handleBackButton}>
                <img src={leftArrowImage} width={25}/>
              </div>
              <GridItem item={toShow} />
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default App
