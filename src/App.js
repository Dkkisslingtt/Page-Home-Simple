import './App.css';
import Testimonio from './component/Testimonio';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      </div>
      <Testimonio
      nombre='Shawn Wang'
      pais='Singapur'
      imagen='shawn'
      cargo='ingeniera de software'
      empresar='Amazon'
      testimonio='En el Capítulo 1, creamos valores y les aplicamos operadores a ellos para obtener nuevos valores. Crear valores de esta manera es la sustancia principal de cualquier programa en JavaScript. Pero esa sustancia tiene que enmarcarse en una estructura más grande para poder ser útil. Así que eso es lo que veremos a continuación.'      
      />
      <Testimonio
      nombre='Sarah Chima'
      pais='Nigeria'
      imagen='sarah'
      cargo='ingeniera de software'
      empresar='ChatDesk'
      testimonio='En el Capítulo 1, creamos valores y les aplicamos operadores a ellos para obtener nuevos valores. Crear valores de esta manera es la sustancia principal de cualquier programa en JavaScript. Pero esa sustancia tiene que enmarcarse en una estructura más grande para poder ser útil. Así que eso es lo que veremos a continuación.'      
      />
      <Testimonio
      nombre='Ema bostian'
      pais='suecia'
      imagen='emma'
      cargo='ingeniera de software'
      empresar='spotify'
      testimonio='En el Capítulo 1, creamos valores y les aplicamos operadores a ellos para obtener nuevos valores. Crear valores de esta manera es la sustancia principal de cualquier programa en JavaScript. Pero esa sustancia tiene que enmarcarse en una estructura más grande para poder ser útil. Así que eso es lo que veremos a continuación.'      
      />
   
    </div>
  );
}

export default App;
