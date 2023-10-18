import { Level } from "../../helpers/imc"
import style from "./GridItem.module.css"

import upImagem from "../../assets/up.png"
import downImagem from "../../assets/down.png"

type Props = {
  item: Level
}

export const GridItem = ({item}:Props) =>{
  return(
    <div className={style.main} style={{backgroundColor:item.color}}>
      <div className={style.gridIcon}>
        {<img src={item.title !== "Normal" ? downImagem: upImagem} alt="" width={30} height={30}/>}
      </div>

      <div className={style.gridTitle}> 
        {item.title}
      </div>


      {item.yourImc && 
      <div className={style.yourImc}>Seu IMC é de: <strong>{item.yourImc} kg/m²</strong> </div>
      }

      <div className={style.gridInfo}>
        <>
          IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
        </>
      </div>
    </div>
  )
}