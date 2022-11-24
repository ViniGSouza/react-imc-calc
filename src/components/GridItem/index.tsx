import { Level } from '../../helpers/imc';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

interface ItemProps {
  item: Level
}

export function GridItem({item}: ItemProps) {
  return (
    <div className="flex flex-1 text-white rounded-[10px] justify-center align-middle flex-col p-6 text-center" style={{backgroundColor: item.color}}>
      <div className="flex justify-center align-middle p-6 rounded-[50%] bg-black/[.1] mx-auto">
        <img src={item.icon === 'up' ? upImage : downImage} width="30"/>
      </div>
      <div className="text-[23px] font-bold mt-[5px]">{item.title}</div>
      {item.yourImc && 
        <div className="text-[17px] mt-[10px] mb-[50px]">Seu IMC é de {item.yourImc.toFixed(2)} kg/m²</div>      
      }
      <div className="text-xs mt-[10px]">
        IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong> 
      </div>
    </div>
  )
}