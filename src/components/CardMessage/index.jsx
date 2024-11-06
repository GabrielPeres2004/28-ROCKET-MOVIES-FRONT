import { Container } from "./style";

import { FiX } from "react-icons/fi";

export function CardMessage({message, IsMessage = false, onClick}){
    return(
        <Container $IsMessage={IsMessage} id="message">
            <button
            onClick={onClick}
            >
                <FiX />
            </button>

            <p>
                {IsMessage ? message : " "}
            </p>
        </Container>
    )
}