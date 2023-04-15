import React from 'react';
import UsuarioNome from './usuario/UsuarioNome'

export default function Random(){

    const [usuario, setUsuario] = React.useState();

    function Carregar(){
        
        fetch(`https://randomuser.me/api/`)
        .then((response) => response.json())
        .then((usuario) => {
            setUsuario(usuario)
        });
    }
    React.useEffect(() =>  {
        Carregar();
    },[]);

    return(
        usuario ? 
        <>
            <UsuarioNome usuario={usuario}/>                
        </>
        :
        <h1>Carregando</h1>
    )
}