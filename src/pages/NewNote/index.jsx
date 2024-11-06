import { Container, Form } from "./style";
import { Header } from "../../components/Header"; 
import { Section } from "../../components/Section";
import { TextArea } from "../../components/TextArea";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Button } from  '../../components/Button'
import { ButtonText } from "../../components/ButtonText";
import { CardMessage} from '../../components/CardMessage'

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { FiArrowLeft } from "react-icons/fi";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function NewNote(){

    const navigate = useNavigate()
    const { SignOut} = useAuth()

    const [ title, setTitle] = useState('')
    const [ description, setDescription] = useState('')
    const [ rating, setRating] = useState(Number)
    const [ tags, setTags] = useState([])
    const [newtag, setNewTag] = useState('')

    const [ message, setMessage] = useState("")
    const [ isMessage, setIsMessage] = useState(false)
    const [loading, setLoading] = useState(false)


    function handleBack(){
        navigate(-1)
    }

    function handleCloseMessage() {
        setIsMessage(false)
        setMessage("")
    }

    function handleAddTags(){
        if(newtag === ""){
            return
        }
        setTags(prevState => [...prevState, newtag])
        setNewTag("")
    }

    function handleRemoveTags(tagDeleted){
        setTags(prevState => prevState.filter(tag => tag !== tagDeleted))
    }


    async function handleAddNotes(){

        if (!title) {
            setIsMessage(true)
            setMessage("Por favor insira um título");
            return
        }

        if (!rating) {
            setIsMessage(true)
            setMessage("Por favor insira a nota do filme");
            return
        }

        if (rating > 5) {
            setIsMessage(true)
            setMessage("A nota deve ser no máximo 5.");
            return
        }

        if (rating < 0) {
            setIsMessage(true)
            setMessage("A nota deve ser no mínimo 0");
            return
        }


        if(newtag){
            setIsMessage(true)
            setMessage("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar.")
            return
        }

        if (tags.length === 0) {
            setIsMessage(true)
            setMessage("Por favor insira uma tag");
            return
        }


        try {
            setLoading(true)

            await api.post('/notes', {
                title,
                description,
                rating,
                tags
            })

            navigate(-1)
            
        } catch (error) {
            setIsMessage(true)
            if(error.response?.status === 401){
                SignOut()
                return
            } 

            else if(error.response){
                setMessage(error.response.data.message)
            } 

            else {
                setMessage("Não foi possivel cadastrar nota")
            }
            
        }

        setLoading(false)

    }

    function cancelAddNotes(){
        navigate(-1)
    }
    return(
        <Container>
            <CardMessage 
            IsMessage={isMessage}
            message={message} 
            onClick={handleCloseMessage}
            />

            <Header />

            <main>
                <Form>
                    <header>
                        <ButtonText 
                        onClick={handleBack}
                        icon={FiArrowLeft}
                        title="Voltar"
                        /> 

                        <h1>Novo filme</h1>
                    </header>

                    <div className="InputField">
                        <Input 
                        placeholder="Título"
                        onChange={e => setTitle(e.target.value)}
                         />
                        <Input 
                        placeholder="Sua nota (de 0 a 5)" 
                        type="number"
                        onChange={e => setRating(e.target.value)}
                        />

                    </div>

                    <TextArea 
                    placeholder="Observações"
                    onChange={e => setDescription(e.target.value)}
                    />

                    <Section
                    title="Marcadores">
                        <div className="tags">
                            <NoteItem 
                            isNew 
                            placeholder="Nova tag" 
                            value={newtag}
                            onChange={e => setNewTag(e.target.value)}
                            onClick={handleAddTags}
                            />

                            {
                                tags && tags.map((tag, index) => (
                                    <NoteItem 
                                    key={String(index)}
                                    value={tag} 
                                    onClick={() => handleRemoveTags(tag)}
                                    />
                                ))
                            }

                        </div>
                    </Section>

                    <div className="fieldButton">
                        <Button 
                        title="Cancelar"
                        onClick={cancelAddNotes}
                        />

                        <Button 
                        title="Salvar alterações"
                        loading={loading}
                        onClick={handleAddNotes}
                        />
                    </div>

                    
                
                </Form>
            </main>

        </Container>
    )
}