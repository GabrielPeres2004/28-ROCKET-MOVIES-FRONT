import styled from "styled-components";

export const Container = styled.div`
display: grid;
grid-template-rows: 14rem auto;
grid-template-areas: 
"header"
"content";

height: 100vh;
width: 100vw;

#message{
    top: 1rem;
    right: .5rem;
}


header {
    grid-area: header;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    padding: 4.2rem 2.4rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    button{
        display: flex;
        align-items: center;
        gap: .8rem;

        color: ${({ theme }) => theme.COLORS.PINK};
    }
}

`

export const Form = styled.form`
grid-area: content;

display: flex;
flex-direction: column;
align-items: center;

margin: 3rem auto;

width: 60%;

div {
    margin-bottom: .8rem;

    &:nth-child(2){
        margin-top: 2.4rem;
    }
      
    &:nth-child(4){
        margin-top: 1rem;
    }
}
    
button { 
    margin-top: 2.4rem;
    margin-bottom: 4rem;
}


@media (min-width: 1000px) {
    width: 30%; 
}

`

export const Avatar = styled.div`
position: relative;
width: 16.6rem;
height: 16.6rem;

margin-top: -8rem;


img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}

label{
    display: flex;
    position: absolute;
    bottom: 1px;
    right: 5px;
    
    cursor: pointer;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    padding: 1rem;
    border-radius: 50%;

    input{
        display: none;
    }


    svg{
        font-size: 2rem;
    }
}


@media (min-width: 1000px) {
   margin-top: -10rem ;
}


`