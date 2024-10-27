import { Title, Container, InputLabel, Input, ContainerInputs, Form } from "./style"
//impotando o style.js
//import UsersImage from "../../assets/users.png"
//importado a imagem

import { useRef } from 'react';
//imporatdo o useRef-> site: https://react.dev/reference/react/useRef

import api from "../../services/api"
import Button from "../../components/button";
import TopBackground  from "../../components/TopBackground/"

import { useNavigate } from "react-router-dom"; //navigação entre pag

function Home() {
  //javascript

  //variaveis do ref
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate() //passando o useNavigate como função

  async function registerNewUser() {
    const data = await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),  //parseint passa os valores para inteiro
      name: inputName.current.value
    })

    navigate('/lista-de-usuarios')
    console.log(data);

  }

  return (

    <>
      <Container>
        <TopBackground  />


        <Form>
          <Title>Cadastrar Usuário</Title>

          <ContainerInputs>

            <div >
              <InputLabel>
                Nome <span>*</span>
              </InputLabel>
              <Input type='text' placeholder='Nome do usuário' ref={inputName} />
            </div>

            <div>
              <InputLabel>
                Idade <span>*</span>
              </InputLabel>
              <Input type='number' placeholder='Idade do usuário' ref={inputAge} />
            </div>

          </ContainerInputs>


          <div style={{ width: '100%' }}>
            <InputLabel>
              Email <span>*</span>
            </InputLabel>
            <Input type='email' placeholder='Email do usuário' ref={inputEmail}></Input>
          </div>

          <Button type="button" onClick={registerNewUser} theme="primary">Cadastrar Usuário</Button>

        </Form>

        <Button type="button" onClick={() => navigate('/lista-de-usuarios')}>Ver lista de usuários</Button>

      </Container>

    </>
  )
}

export default Home


