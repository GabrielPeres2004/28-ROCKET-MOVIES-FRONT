import { Container, Form, Avatar } from "./style";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { CardMessage} from '../../components/CardMessage'

import { FiArrowLeft, FiUser , FiMail, FiLock, FiCamera } from "react-icons/fi";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { api } from "../../services/api";


export function Profile(){
    const { message, isMessage, user, handleCloseMessage, updatedProfile} = useAuth()
    const navigate = useNavigate()

    const imageURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    
    const [ name, setName] = useState(user.name)
    const [ email, setEmail] = useState(user.email)
    const [ passwordOld, setPasswordOld] = useState()
    const [ newPassword, setNewPassword] = useState()
    const [ avatar, setAvatar] = useState(imageURL)
    const [ avatarFile, setAvatarFile] = useState(null)
    const [ loading, setLoading] = useState(false)


    function handleBack(){
        handleCloseMessage()
        navigate(-1)
    }

    async function handeUpdatedProfile(){
        setLoading(true)
        
        const updated = {
            name,
            email,
            password: newPassword,
            oldPassword: passwordOld
        }

        const userUpdated = Object.assign(user, updated)

        await updatedProfile({ user: userUpdated, avatarFile })
        
        setLoading(false)
        
    }

    function handleChangeAvatar (event){
        const file = event.target.files[0]

        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
    
        setAvatar(imagePreview)
    }

    return(
        <Container>
            
            <CardMessage 
            IsMessage={isMessage}
            message={message} 
            onClick={handleCloseMessage}
            />

            <header >
                <ButtonText 
                onClick={handleBack}
                icon={FiArrowLeft}
                title="Voltar"
                /> 
                 
            </header>



            <Form>
                <Avatar>
                    <img src={avatar} alt="Foto do usúario" />

                    <label>
                        <input type="file" onChange={handleChangeAvatar}/>
                        <FiCamera />
                    </label>
                </Avatar>

                
                <Input
                icon={FiUser}
                placeholder="Nome"
                value={name}
                onChange={e => setName(e.target.value)}
                />


                <Input 
                icon={FiMail} 
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />

                <Input 
                icon={FiLock} 
                placeholder="Senha atual"
                onChange={e => setPasswordOld(e.target.value)}
                />

                <Input 
                icon={FiLock} 
                placeholder="Nova senha"
                onChange={e => setNewPassword(e.target.value)}
                />

                <Button 
                title="Salvar" 
                onClick={handeUpdatedProfile}
                loading={loading} />
            </Form>

        </Container>
    )
}