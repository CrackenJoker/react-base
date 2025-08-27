import React from 'react';
import { InputAdd } from './components/inputAdd';
import { ItemList } from './components/itemAdd';

/*interface CardProps{
  titulo?:string;
  children?:React.ReactNode;
  rodape?:string;
}*/

/*function Card(props:CardProps){
  return(
    <div style={{border:'1px solid black', margin:'10px', padding:'10px', width:'80%',display:'flex',flexDirection:'column',alignItems:'center',borderRadius:'10px'}}>
      <h1>Titulo:{props.titulo}</h1>
      <div>
        <p style={{display:'flex',flexWrap:'wrap'}}>{props.children}</p>
      </div>
      <div>
        <p>rodape:{props.rodape}</p>
      </div>
    </div>
  )
}*/

export function App() {

  const [item, setItem] = React.useState([
    {id:1, nome:'Orar a Deus',estado:false},
    {id:2, nome:'Exercitar o corpo',estado:false},
    {id:3, nome:'Higiene pessoal',estado:false},
    {id:4, nome:'Tomar um banho',estado:false},
    {id:5, nome:'Tomar o pequeno almoco',estado:false}
  ])
  
  const handleRemover = (id:number)=>{
        setItem(item.filter((item)=>item.id !==id))
    }

  const handleConcluir = (id:number)=>{
        setItem(item.map((item)=>{
        if(item.id===id){
            return{...item,estado:true}
        }
        return item
        }))
    }

  const handleAdd = (valor:string)=>{
    setItem([...item,{id:item.length+1,nome:valor,estado:false}])
  }

  return (
    <>         
          <div>
            <h1>Lista de tarefas</h1>
            <InputAdd onAdd={(value)=>{handleAdd(value)}}/>
           <ol>
            {item.map((item)=>{
              return <ItemList 
                key={item.id} id={item.id} nome={item.nome} 
                estado={item.estado} onConcluir={(id:number)=>{handleConcluir(id)}}
                onRemover={(id:number)=>{handleRemover(id)}}/>
            })}
           </ol>
          </div>  
    </>
  )
}


