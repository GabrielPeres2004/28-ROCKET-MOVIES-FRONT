import styled from "styled-components";

import BackgroundImg from '../../assets/background.jpg'

export const Container = styled.div`
display: flex;

width: 100vw;
height: 100vh;

#message{
    bottom: 1rem;
    right: .5rem;
}

`


export const Form = styled.form`
@media (min-width: 799px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;


    
    width: 50%;   
    margin-left: 5rem;

    padding: 1rem 3rem;

    background: none;

    #inputs{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 0 auto;
    flex-wrap: nowrap;


    div:nth-child(1){
        width: 100%;
    }

    #wrap{
        width: 100%;
        flex-wrap: wrap;
    }
    
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
overflow-y: auto;

background: url(${BackgroundImg}) center center no-repeat ;
background-size: cover;

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

#inputs{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 0 auto;
    flex-wrap: wrap;


    div:nth-child(1){
        margin: 0 auto;

        div{
            border: 1px solid ${({ theme }) => theme.COLORS.PINK};
        }
    }

    #wrap {
        display: flex;
        gap: .8rem;
        margin: 0 auto;

        
        div {
            border: 1px solid ${({ theme }) => theme.COLORS.PINK};
            
        }
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

        display: flex;
        align-items: center;
        gap: 1rem;
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