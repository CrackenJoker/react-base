import React from 'react';

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
  
  const [valor, setValor] = React.useState('')
  const [item, setItem] = React.useState([
    {id:1, nome:'Orar a Deus',estado:false},
    {id:2, nome:'Exercitar o corpo',estado:false},
    {id:3, nome:'Higiene pessoal',estado:false},
    {id:4, nome:'Tomar um banho',estado:false},
    {id:5, nome:'Tomar o pequeno almoco',estado:false}
  ])
  
  function removerItem(id:number){
    setItem(item.filter((item)=>item.id !==id))
  }

  function concluirItem(id:number){
    setItem(item.map((item)=>{
      if(item.id===id){
        return{...item,estado:true}
      }
      return item
    }))
  }
  return (
    <>         
          <div>
            <h1>Lista de tarefas</h1>
            <input type="text"  value={valor} 
            onChange={(e)=>setValor(e.target.value)}
            placeholder='Insira um novo item para a lista'/>
            <button onClick={()=>{setItem([...item,{id:item.length+1,nome:valor,estado:false}]);
            setValor('')}}>Adicionar</button>
            <ol>
              {item.map((item)=>
                <li key={item.id}>
                  {item.nome}
                  {item.estado ? ' - Concluido' : ' - Pendente'}
                  <button onClick={()=>concluirItem(item.id)}>Concluir</button>
                  <button onClick={()=>removerItem(item.id)}>Remover</button>
                </li>)}
            </ol>
          </div>  
    </>
  )
}


