import React from 'react';
import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect'

const Formulario = ({guardarCategoria}) => {
    

    const OPCIONES =[
        {value:'general',label:'General'},
        {value:'business',label:'Negocios'},
        {value:'entertainment',label: 'Entretenimiento'},
        {value:'Health',label:'Salud'},
        {value:'science',label: 'Cinecia'},
        {value:'sport',label:'Deportes'},
        {value:'technology',label:'Tecnologia'},
    ]
    //utilizar custom hook
    const [categoria,SelectNoticias]=useSelect('general',OPCIONES);

    //submit al form, pasar la categoria a app .js
    const buscarNoticias = e =>{
        e.preventDefault();
        //mandamos categoria al app js
        guardarCategoria(categoria);
    }

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className=' col s12 m8 offset-m2'>
                <form
                onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por su Categoria</h2>
                    <SelectNoticias/>
                    <div className='input-field col s12'>
                        <input
                        type='submit'
                        className={`btn-large amber darken-2 ${styles.btn_block}`}
                        value='Buscar'
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Formulario;