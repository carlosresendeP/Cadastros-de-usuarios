import { Button1 } from "../../components/button/styles"
import TopBackground from "../../components/TopBackground"

import api from "../../services/api"

import { useEffect, useState } from "react"
import { AvatarUser, CardUsers, Container, ContainerUsers, Title, TrashIcon } from "./style"
//estilos das tags
import Trash from "../../assets/trash.svg"
import { useNavigate } from "react-router-dom"






function ListUsers() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()
    /*use state
        const [age, setAge] = useState(28);
    */


    //TODA VEZ que a tela carrega o useEffect é chamado 
    //TODA VEZ que a variavel muda de valor o useEffect é chamado 
    useEffect(()=> {
        //não pode haver async direto é presciso criar uma função
        async function getUsers(){
            const {data} = await api.get('/usuarios') //somente a data dentro da api
            
        setUsers(data)
            
            
        }
        
        getUsers()
        
    }, [])

    //dentro dos [] sem nada significa que ao carregar chama o useeffect
    //[users,clients] significa que quando há uma mudança neles o useeffect é chamado


    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id}`)

        const updateUsers = users.filter( user => user.id !== id)
        /*  Vai filtar todos ou usuarios com o filter,
            na nova variavel (updateusers) vai quardar todos os usuarios menos o deletado

            (user = usuario por usuario)
        */
        
        setUsers(updateUsers)
    }


    return (
        <>
            <Container>
                <TopBackground  />
                <Title>Lista de usuários</Title>

                <ContainerUsers>
                    {users.map( user => (
                        <CardUsers key={user.id}>
                            <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`}></AvatarUser>
                            <div >
                                <h3>{user.name}</h3>
                                <p>{user.email}</p>
                                <p>{user.age}</p>
                            </div>
                            <TrashIcon src={Trash} alt="icone-lixo" onClick={()=>deleteUsers(user.id)}></TrashIcon>
                        </CardUsers>
                    ))}
                </ContainerUsers>

                <Button1 type="button" onClick={() => navigate('/')}>Voltar</Button1>


            </Container>

        </>
    )
}

export default ListUsers