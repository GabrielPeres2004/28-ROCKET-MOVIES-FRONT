import { Container, Main, YourNotes } from "./style";

import { Header } from "../../components/Header";
import { Notes } from "../../components/Note";
import { CardMessage } from "../../components/CardMessage";
import { Input } from "../../components/Input";

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";


import { FiPlus,FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Home(){
    const navigate = useNavigate()
    const {  message, isMessage, handleCloseMessage, SignOut } = useAuth()
    
    const [ search, setSearch] = useState('')
    const [ notes, setNotes] = useState([])

    function handlePreviewnotes(id){
        navigate(`/preview/${id}`)
    }

    useEffect(() => {
        async function fetchNotes () {
            const response = await api
            .get(`/notes?title=${search}`)
            .catch((error) => {
                if(error.response?.status === 401){
                    SignOut()
                    return
                } 

            })
            
            setNotes(response.data)
        }

        fetchNotes()
    }, [search])

    

    return(
        <Container>
            <CardMessage 
            IsMessage={isMessage}
            message={message} 
            onClick={handleCloseMessage}
            />
            
            <Header />

            <Main>
                
                <Input 
                icon={FiSearch} 
                placeholder="Pesquisar pelo título"  
                onChange={e => setSearch(e.target.value)}
                />

                <div className="group1">
                    <h1>Meus Filmes</h1>
                    <Link to="/new"> <FiPlus /> Adicionar filme</Link>
                </div>



                <YourNotes>
                { 
                   notes &&  
                   notes.map(note => (
                     <Notes
                     key={String(note.id)}
                     data={note}
                     onClick={() => handlePreviewnotes(note.id)}
                     />
                    ))  
                }                            
            </YourNotes>

            </Main>




        </Container>
    )
}