import React,{useState} from 'react'
const useSelect = (stateInicial,opciones) => {
    //state del custom hook
    const [state,actualizarState]=useState('');
    
    const selectNoticias = () =>(
        <select 
        className='browser-default'
        >
            <option value=''>Seleccione</option>

        </select>
    );

    return [state,selectNoticias];
}
 
export default useSelect;