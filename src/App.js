import React,{Fragment,useState,useEffect} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
function App() {
  //definir categoria de noticias
  const [categoria,guardarCategoria]=useState('');
  const [noticias, guardarNoticias]=useState([]);

  //CONSULTA AL API
  useEffect(() => {
    const consultarAPI = async () =>{
      const url =`https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=efe5380d8dfa4a278641a5cdd6ef452a`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles)
     
    }
    consultarAPI()
  }, [categoria])


  return (
    <Fragment>
      <Header
      titulo='Buscador de Noticias'
      />
      <div className='container white'>
        <Formulario
        guardarCategoria={guardarCategoria}
        
        />
      </div>
    </Fragment>
  );
}

export default App;
