import styled from "styled-components"

export const Container = styled.div`

display: grid;
grid-template-rows: 10rem auto;

grid-template-areas: 
"header"
"content"
;

height: 100vh;

#message{
    bottom: 1rem;
    right: .5rem;
}

`

export const Main = styled.main`
grid-area: content;

display: flex;
align-items: flex-end;
justify-content: flex-start;
flex-direction: column;

padding: 0 1rem;

overflow-y: auto;

#inputSearch{
    margin-block: 3rem;
}

.group1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 1rem;

    h1 {
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 50%;
        height: 4.2rem;

        padding: .5rem 1rem;
        border-radius: .8rem;

        gap: .5rem;

        background-color: ${({ theme }) => theme.COLORS.PINK};
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    }
    
}

`


export const YourNotes = styled.div`
grid-area: Notes;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

width: 100%;

margin-top: 4rem;


`

