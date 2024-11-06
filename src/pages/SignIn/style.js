import styled from "styled-components";

import BackgroundImg from '../../assets/background.jpg'

export const Container = styled.div`
display: flex;

width: 100vw;
height: 100vh;

overflow: hidden;

#message{
    bottom: 1rem;
    right: .5rem;
}

`


export const Form = styled.form`
@media (min-width: 799px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    
    width: 50%;   
    margin-right: 5rem;

    padding: 1rem 3rem;


    background: none;

    #wrap {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    #link { 

        a {
            margin: 0 auto;
        }
    }

    



}



display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;

width: 100%;
height: 100%;

padding: 1rem;

background: url(${BackgroundImg}) center center no-repeat;
background-size: cover;

overflow-y: auto;


h1{
    margin-top: 2rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 3rem;
    font-weight: 700; 
}

span {
    color: ${({ theme }) => theme.COLORS.WHITE};
    
}



h2 {
    font-size: 2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-block: 3rem 2.6rem;
}

#wrap{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 0 auto;

    div {
        border: 1px solid ${({ theme }) => theme.COLORS.PINK};
    }
    
    
}

button{
    margin-block: 2rem 2rem;
    font-size: 1.8rem;
}

#link{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    margin: 0 auto;

    width: 100%;

    padding-bottom: 1rem;

    a {
        color: ${({ theme }) => theme.COLORS.PINK};
        
    }
}

`


export const Background = styled.div`
@media (max-width: 799px ) {
    display: none;
}

background: url(${BackgroundImg}) center center no-repeat;
background-size: cover;
width: 100%;


`