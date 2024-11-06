import { Container } from "./style";



export function Input({icon: Icon , ...rest}){
    return(
        <Container
        id="inputSearch"
        {...rest}>
            {Icon && <Icon size={20}/>} 

            <input type="text" {...rest} />

        </Container>
    )
}