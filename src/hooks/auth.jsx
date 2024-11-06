import { createContext, useContext, useEffect, useState } from "react";
import { api } from '../services/api'

const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [ data, setData] = useState({})

    const [ isMessage, setIsMessage] = useState(false)
    const [ message, setMessage] = useState("")

    function handleCloseMessage(){
        setIsMessage(false)
        setMessage("")
    }
    

    async function SignUp({name,email, password}){
        handleCloseMessage()
        try {

            await api.post('/users', {name,email, password})

            return true
        } catch (error) {
            setIsMessage(true)
            if(error.response){
                setMessage(error.response.data.message)
            } else {
                setMessage("Não foi possivel cadastrar o usúario")
            }

            return false
        }
    }

    async function SignIn({email, password}){
        handleCloseMessage()

        try {
            const response = await api.post("/sessions", { email, password})

            const { user } = response.data

            localStorage.setItem('@Rocketmovies:user', JSON.stringify(user))

            setData({user})

            
        } catch (error) {
            setIsMessage(true)

            if(error.response){
                setMessage(error.response.data.message)
            } else {
                setMessage("Não foi possivel autenticar o usúario")
            }
            
        }
    }

    function SignOut(){
        localStorage.removeItem('@Rocketmovies:user')

        setData({})

    }

    async function updatedProfile({ user, avatarFile }){
        handleCloseMessage()
        
        try {
            
            if (avatarFile) {
                
                const fileUploadForm = new FormData()
                
                fileUploadForm.append("avatar", avatarFile)
                
                const response = await api.patch('/users/avatar', fileUploadForm)
                
                user.avatar = response.data.avatar
                
            }
            
            
            await api.put('/users', user)
            
            localStorage.setItem('@Rocketmovies:user', JSON.stringify(user))
            
            setData({user})
            
            setIsMessage(true)
            setMessage("Suas informações foram atualizadas com sucesso")
            
            
        } catch (error) {
            setIsMessage(true)
            if(error.response?.status === 401){
                SignOut()
                return
            }
            
            else if(error.response){
                setMessage(error.response.data.message)
            } 
            
        }
    }

    useEffect(() => {
        const user = localStorage.getItem('@Rocketmovies:user')


        if(user ){
            setData({
                user: JSON.parse(user)
            })
        }

    }, [])

    return (
        <AuthContext.Provider value={{
            SignUp,
            SignIn,
            SignOut,
            updatedProfile,
            handleCloseMessage,
            user: data.user,
            isMessage,
            message
        }}>
            {children}
        </AuthContext.Provider>

    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}


export { AuthProvider, useAuth }