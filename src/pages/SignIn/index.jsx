import { Container, Form, Background } from "./style";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { CardMessage } from "../../components/CardMessage";

import { Link } from "react-router-dom";

import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import { FiLock, FiMail } from "react-icons/fi";

export function SignIn(){

    const { SignIn, isMessage, message, handleCloseMessage} = useAuth()


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)


    function handleSignIn(){
        setLoading(true)
        SignIn({email, password})
        setLoading(false)
    }
    
    return(
        <Container>
            <CardMessage
            IsMessage={isMessage}
            message={message} 
            onClick={handleCloseMessage}
            />

            <Form>                     
                <h1>RocketMovies</h1>
                <span>Aplicação para acompanhar tudo que assistir.</span>
                    
                <h2>Faça seu login</h2>



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

                <Button 
                title="Entrar" 
                loading={loading}
                onClick={handleSignIn}
                />

                <div id="link">
                    <Link to="/register">Criar conta</Link>
                </div>



            </Form>

            <Background className="BackgroundImg" />

        </Container>
    )
    
}
