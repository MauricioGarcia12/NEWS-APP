import React from 'react';
import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect'

const Formulario = () => {
    //utilizar custom hook
    const [categoria,SelectNoticias]=useSelect();

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className=' col s12 m8 offset-m2'>
                <form>
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