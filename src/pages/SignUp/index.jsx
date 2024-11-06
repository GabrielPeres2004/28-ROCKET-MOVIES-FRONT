import { useState } from "react";
import { Container, Form, Background } from "./style";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import{ CardMessage} from '../../components/CardMessage'

import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { FiLock, FiMail, FiArrowLeft, FiUser } from "react-icons/fi";

export function SignUp(){
    const navigate = useNavigate()
    const { SignUp, handleCloseMessage,isMessage, message } = useAuth()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    function handleSignUp(){
        setLoading(true)

        SignUp({name, email, password})
        .then(sucess => {
            setLoading(false)

            if(sucess){
                navigate(-1)
            }
            
        })
        
    }

    return(
        <Container>
            <CardMessage 
            IsMessage={isMessage}
            message={message} 
            onClick={handleCloseMessage}
            />
            
            <Background className="BackgroundImg" />

            <Form>                     
                <h1>RocketMovies</h1>
                <span>Aplicação para acompanhar tudo que assistir.</span>
                    
                <h2>Crie sua conta</h2>



                <div id="inputs">

                    <div>
                        <Input 
                        icon={FiUser} 
                        placeholder="Nome"
                        onChange={e => setName(e.target.value)}
                        />
                    </div>

                    <div id="wrap">
                        <Input 
                        icon={FiMail} 
                        placeholder="E-mail"
                        onChange={e => setEmail(e.target.value)}
                        />
                        <Input 
                        icon={FiLock} 
                        placeholder="Senha"
                        onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                </div>

                <Button 
                title="Cadastrar" 
                loading={loading}
                onClick={handleSignUp} 
                />

                <div id="link">
                    <Link to="/"> <FiArrowLeft /> Voltar para o login</Link>
                </div>
            </Form>





        </Container>
    )
    
}
