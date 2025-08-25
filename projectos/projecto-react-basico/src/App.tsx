import React from 'react';

interface CardProps{
  titulo?:string;
  children?:React.ReactNode;
  rodape?:string;
}
function Card(props:CardProps){
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
}

export function App() {
  const [item, setItem] = React.useState([
    {id:1, nome:'Orar a Deus'},
    {id:2, nome:'Exercitar o corpo'},
    {id:3, nome:'Higiene pessoal'},
    {id:4, nome:'Tomar um banho'},
    {id:5, nome:'Tomar o pequeno almoco'},
  ])

  return (
    <>         
          <div>
            <h1>Lista de tarefas</h1>
            <input type="text" name='itemNovo' placeholder='Insira um novo item para a lista'/>
            <button onClick={()=>setItem}>Adicionar</button>
            <ol>
              {item.map((item)=><li key={item.id}>{item.nome}</li>)}
            </ol>
          </div>  
    </>
    

  )
}


