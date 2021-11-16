import { Fragment, useState, useEffect } from 'react'
import Clima from './components/Clima';
import Error from './components/Error';
import Formulario from './components/Formulario';
import Header from './components/Header';

function App() {

  // a proteger
   const key = "c566aca741d42617ca15da5401c46592";

  const [busqueda, guardarBusqueda] = useState({
    ciudad:"",
    pais:""
  })

  const [consulta, consultar] = useState(false);
  const [ weather, setWeather ] = useState({})
  const [error, setError] = useState(false)

  const { ciudad, pais } = busqueda;
//eslint-disable-next-line
  useEffect( async()=>{
    if(consulta){
      let res = await fetchAPI(ciudad, pais, key);
      if(res.cod === "404"){
        setError(true)
      }else{
        setError(false)
      }
      console.log("Realizando petición",res);
      setWeather(res)
    }
    
  },[consulta])
  //eslint-disable-next-line
  const fetchAPI = async(ciudad, pais,key)=>{

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${key}`;
    let consult = await fetch(url);
    let res = await consult.json();
    consultar(false)
    return res
  }
  

  return (
    <Fragment>
      <Header
        titulo='React Clima'
      />

      <div className="contenedor-form">
          <div className="container">
              <div className="row">
                <div className="col m6 s12">
                  <Formulario
                    busqueda={busqueda}
                    guardarBusqueda={guardarBusqueda}
                    consultar={consultar}
                  />
                </div>
                <div className="col m6 s12">
                  {
                    error
                    ? <Error message="No hay resultados" />
                    : <Clima weather={weather} />
                  }
                </div>
              </div>
          </div>
      </div>

    </Fragment>
  );
}

export default App;
