import { Container } from "./style";

import { FiLoader } from "react-icons/fi";

export function Button({icon: Icon, title, loading = false, ...rest}){
    return(
        <Container
        type="button" disabled={loading} {...rest}>
            {Icon && <Icon size={16}/>}
            {loading ? <FiLoader className="spin" /> : title}


        </Container>
    )
}