import { Container, User, ImageUser } from "./style";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";


import avatarPlaceholder from '../../assets/avatar_placeholder.svg' 


export function Header(){
    const { user } = useAuth()
    const { SignOut } = useAuth()

    const imageURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder


    return(
        <Container>
            
            <User>
                <section>
                    <ImageUser to="/profile">
                      <img src={imageURL} alt="Foto do usúario" />
                    </ImageUser>

                    <div id="logout">
                        <p>{user.name}</p>
                        <a onClick={SignOut}>Sair</a>
                    </div>
                </section>
                
                <h1>RocketMovies</h1>
            </User>

        </Container>
    )
}