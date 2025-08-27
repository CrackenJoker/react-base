import React from "react";


interface InputAddProps{
    onAdd(valor:string):void
}

export const InputAdd=(props:InputAddProps)=>{
    const [valor, setValor] = React.useState('')
    
    const handleAdd = ()=>{
        props.onAdd(valor);
        setValor('')
    }
    
    return(
        <div>
             <input type="text"  value={valor} 
            onChange={(e)=>setValor(e.target.value)}
            placeholder='Insira um novo item para a lista'/>
            <button onClick={handleAdd}>Adicionar</button>
           
        </div>
    )
}