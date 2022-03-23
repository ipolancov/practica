
import './App.css';
import React from 'react';

class Persona extends React.Component
{
  state={
    nombre:"ivan",apellido_paterno:"polanco", apellido_materno:"valenzuela",
    edad:35,
    contador:1
  }
  render()
  {
    return(
      <div>hola mundo desde persona
        hola mi nombre es {this.state.nombre}  
        mis apellidos son {this.state.apellido_paterno} {this.state.apellido_materno} 
        y mi edad es {this.state.edad}
        otra propiedad {this.props.otra_propiedad}
        <div><button onClick={()=>this.setState({nombre:"ivan guadalupe"})}>
          actualizar nombre</button></div>
         
          <form>
            <input></input>
            <button onClick={()=>this.setState({contador:this.state.contador + 1})}>
              actualizar</button>
            
          </form>
          <h2>{this.state.contador}</h2>
      
      </div>
    );
  }
}
function Componente(props)
{
  return(
    <div>este es un componente{props.propiedad}
    </div>
  );
}
function App() 
{
  return (
    <div className="App">
      <header className="App-header">
       hola mundo
       <Componente propiedad="esta es una propiedad"></Componente>
       <Persona otra_propiedad="cualquier valor"></Persona>
      </header>
    </div>
  );
}

export default App;
