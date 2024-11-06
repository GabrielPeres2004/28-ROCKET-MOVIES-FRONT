import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.header`
grid-area: header;
width: 100%;


display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

padding: 0 1rem;

border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
 

`

export const User = styled.div`

display: flex;
align-items: center;
justify-content: space-between ; 

width: 100%;

margin-inline: auto;

section {

display: flex;
align-items: center;

  #logout {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;

    padding: 1rem;

    p {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }


    a {
        font-size: 1.4rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

}



img {
    height: 4.6rem;
    width: 4.6rem;
    border-radius: 50%;
    margin: 0 auto;    
    object-fit: cover;
}

}

h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 1.8rem;
}


@media (min-width: 799px) {


    section{

        #logout {
            p {
                font-size: 1.8rem;
            }

            a {
                font-size: 1.6rem;
            }
        }

        img{
            height: 5.6rem;
            width: 5.6rem;
        }
    }

    h1 {
        font-size: 2.4rem;

    }
    
}`

export const ImageUser = styled(Link)``