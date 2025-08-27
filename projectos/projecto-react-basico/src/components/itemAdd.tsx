


interface Item{
    id:number;
    nome:string;
    estado:boolean;
    onConcluir(id:number):void
    onRemover(id:number):void
}

export const ItemList=(props:Item)=>{

    const concluirItem=(id:number)=>{
        props.onConcluir(id)
    }
    
    const removerItem=(id:number)=>{
        props.onRemover(id)
    }

    return(  
                <li key={props.id}>
                  {props.nome}
                  {props.estado ? ' - Concluido' : ' - Pendente'}
                  <button onClick={()=>concluirItem(props.id)}>Concluir</button>
                  <button onClick={()=>removerItem(props.id)}>Remover</button>
                </li>
         
    )
}