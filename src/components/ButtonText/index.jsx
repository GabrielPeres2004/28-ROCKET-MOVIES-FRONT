import { Container } from "./style";

export function ButtonText({title, icon: Icon, onClick}){
    return(
        <Container type="button" onClick={onClick} >
            {Icon && <Icon size={16}/>}
            {title}
        </Container>
    )
}