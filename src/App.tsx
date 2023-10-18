
import { useState } from 'react'
import styles from './App.module.css'
import poweredImage from './assets/powered.png'
import leftArrowImage from './assets/leftarrow.png'
import {Level, calculateIMC, levels} from './helpers/imc'
import { GridItem } from './components/GridItem'



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

const App = ()=>{
  const [heightField,setHeightField] = useState<number>(0)
  const [weightField,setWeightField] = useState<number>(0)


  const [toShowItem,setToShowItem]=useState<Level | null>(null)


  
  const handleCalculateButtonIMC = ()=>{
    if(heightField > 0 && weightField > 0){
      setToShowItem(calculateIMC(weightField,heightField))
    }else{
      alert('Preencha todos os campos')
    }
  }

  const handleBackButton = ()=>{
    setToShowItem(null);
    setHeightField(0);
    setWeightField(0);
  }

  return(
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
           <img src={poweredImage} alt="" width={250} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calculadora de IMC</h1>
          <p>
            IMC é a sigla para Indice de Massa Corpórea, parâmetro adotado pela Organização Mundial da Saúde para calcular o peso ideal de cada pessoa.
          </p>

          <input 
            type="number"
            placeholder='Digite a sua altura. Ex 1.6 (em métros)'
            name="" id="" 
            value={heightField>0?heightField:''} 
            onChange={e=>setHeightField(parseFloat(e.target.value))}
            disabled={toShowItem?true:false}
          />

          <input 
            type='number'
            placeholder='Digite o sua peso. Ex 72.5 (em kg)'
            name="" id="" 
            value={weightField>0?weightField:''} 
            onChange={e=>setWeightField(parseFloat(e.target.value))}
            disabled={toShowItem?true:false}
          />

          <button onClick={handleCalculateButtonIMC} disabled={toShowItem?true:false}>
            Calcular IMC
          </button>
        </div>
        <div className={styles.rightSide}>
          {!toShowItem && 
            <div className={styles.grid}>
              {levels.map((item,key)=>(
                <GridItem key={key} item={item}/>
              ))}
            </div>
          }
          {toShowItem &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width={25}/>
              </div>
              <GridItem item={toShowItem}/>
            </div>
          }
        </div>
      </div>
    </div>
  )

}


export default App;
