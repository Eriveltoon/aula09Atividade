import React from 'react';
import UsuarioNome from './usuario/UsuarioNome'
import "./App.css"

export default function Random(){

    const [usuario, setUsuario] = React.useState();
    const [i,setI] = React.useState(1);

    function Carregar(){
        
        fetch(`https://randomuser.me/api/`)
        .then((response) => response.json())
        .then((data) => {
            setUsuario(data)
        });
    }

    function Adicionar(){
        setI((prevI) => prevI + 1);
      }
      
      function Reduzir(){
        if (i > 1) {
            setI((prevI) => prevI - 1);
        }
      }

    React.useEffect(() =>  {
        Carregar();
    },[]);

    React.useEffect(() =>  {
        Carregar();
    },[i]);

    return(
        usuario ? 
        <>
            <UsuarioNome usuario={usuario} controle={{i, Adicionar, Reduzir}}/>       
        </>
        :
        <h1>Carregando</h1>
    )
}