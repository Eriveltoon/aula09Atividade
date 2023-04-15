

export default function UsuarioNome(props){
    console.log(props)
    return (
        <>
            <p>Nome: {props.usuario.results[0].name.first}</p>
            <p>Email: {props.usuario.results[0].email}</p>
            <p>Data Nascimento: {props.usuario.results[0].dob.date}</p>
            <p>Endereco {props.usuario.results[0].location.street.name}</p>
            <p>Telefone {props.usuario.results[0].cell}</p>
            <img className="rounded d-block" style={{height: "150px",width: "150px"}} src={props.usuario.results[0].picture.medium}/>

        </>
    )
}