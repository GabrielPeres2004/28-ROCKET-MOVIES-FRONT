import styled from "styled-components";

export const Container = styled.div`
display: grid;
grid-template-rows: 10rem auto;
grid-template-areas: 
"header"
"content";

height: 100vh;

#message{
    top: 10rem;
    right: .5rem;
}

`



export const Form = styled.div`

@media (min-width: 900px) {
    padding: 0 2.4rem 4.8rem ;
}

grid-area: content;

display: flex;
flex-direction: column;
align-items: flex-start;

margin: 0rem auto;
padding: 1.6rem;

width: 100%;



header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;
    
    button {
        display: flex;
        align-items: center;
        
        color: ${({ theme }) => theme.COLORS.PINK};
        
        gap: .8rem;
        margin-top: 1rem;
    }
    
    h1 {
        font-size: 3.2rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin-top: 2rem;
    }
}
    


.InputField {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;

    width: 100%;

    gap: 2rem;


    @media (min-width: 900px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 4rem;
    }
}

textarea{
    margin-block: 4rem;
}

.tags{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    width: 100%;

    flex-wrap: wrap;

    border-radius: 1rem;

    padding: 1rem 0;

    margin-bottom: 1rem;
}


.fieldButton{
    display: flex;
    align-items: center;
    width: 100%;

    gap: 4rem;

    button:nth-child(1){
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900}; 
        color: ${({ theme }) => theme.COLORS.PINK};
    }
}


`