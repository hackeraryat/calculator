import { useState } from 'react';
import styles from './App.module.css';
import ButtonContainer from './components/ButtonsContainer';
import Display from './components/Display';
function App() {
  const [calVal,setCalVal]=useState("");
  const onButtonClick=(buttonText)=>{
    if (buttonText==="C"){
      setCalVal("");
    }else if (buttonText==="="){
      const result=eval(calVal);
      setCalVal(result)

    }else{
      const newDisplaayValue=calVal+buttonText;
      setCalVal(newDisplaayValue);
    }
  }

  

  return <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
     
  </div>
  
   
}

export default App
