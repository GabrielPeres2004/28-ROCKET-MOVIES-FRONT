import { Container, Main } from "./style";

import { Header } from "../../components/Header";
import { CardMessage } from "../../components/CardMessage";
import { ButtonText } from "../../components/ButtonText";
import { Button } from '../../components/Button'
import { Tag } from "../../components/Tags";
import { Stars} from '../../components/Stars'


import { FiArrowLeft, FiClock } from "react-icons/fi";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";


import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Preview(){
    const [ data, setData] = useState(null)
    const { user, handleCloseMessage, SignOut } = useAuth()

    const imageURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const [ message, setMessage] = useState("")
    const [ isMessage, setIsMessage] = useState(false)
    const [loading, setLoading] = useState(false)



    const navigate = useNavigate()
    const params = useParams()
    
    function handleBack(){
        navigate(-1)
    }

    async function handleDelete(){
        const confirm = window.confirm('Você deseja deletar a nota?')

        try {
            if(confirm){
                setLoading(true)
                await api.delete(`/notes/${params.id}`)
                handleBack()
            }
            
        } catch (error) {
            if(error.response?.status === 401){
                SignOut()
                return
            } 

            setIsMessage(true)
            setMessage("Não foi possivel exluir a nota")
        }
        
        setLoading(false)
    }
    
    useEffect(() => {
        async function fetchDatasNotes(){
            const response = await api
            .get(`/notes/${params.id}`)
            .catch((error) => {
                if(error.response?.status === 401){
                    SignOut()
                } 
            })

            setData(response.data)
        }
        
        fetchDatasNotes()
    }, [])


    return(
        <Container>
            
            <CardMessage
            IsMessage={isMessage}
            message={message}
            onClick={handleCloseMessage}
             />
        
            <Header />

            {
                data &&
                <Main>
                    <header>
                    <ButtonText 
                    onClick={handleBack}
                    icon={FiArrowLeft}
                    title="Voltar"
                    />   
                    </header>
                    
                    <div className="titleMovie">

                    <h1>{data.title}</h1>
                    <div className="Stars">
                        <Stars 
                        rating={data.rating}
                        />
                    </div>

                </div>


                <div className="fieldUser">
                    <img src={imageURL} alt="Foto do usúario" />
                    <span>Por {user.name}</span>

                    <FiClock />

                    <span>{data.created_at}</span>
                </div>

               { 
                data.tags &&
                <div className="tags">

                    {
                    data.tags.map(tag => (
                    <Tag 
                    key={tag.id}
                    title={tag.name}
                    />
                    ))
                    }
                </div>
                }
                
                {
                    data.description && 
                    <div className="description">
                        <p>{data.description}</p>
                    </div>
                }

                <Button 
                className="buttonDeleteNote"
                loading={loading}
                title="Excluir filme"
                onClick={handleDelete}
                />
            
            </Main>
            }
            

        </Container>
    )
}