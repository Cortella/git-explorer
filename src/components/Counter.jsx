//hook
import { useState } from 'react'

//imutabilidade - 
// user = [´'bnm','niclau'] 
//user.push('clau')     - altera diretamente na memoria - mutacao original

// no mundo da imutabilidade (nao fazer isso )
// sempre criar novo array , copiando as info de user com spread 

//novoUsuario = [...user, 'clau']

export function Counter() {
    const [counter , setCounter] = useState(0)

    function increment(){
        setCounter(counter+1)
    }
    return(
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>Add</button>
        </div>
    )
}