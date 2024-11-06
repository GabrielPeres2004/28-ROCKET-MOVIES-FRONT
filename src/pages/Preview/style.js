import styled from "styled-components";


export const Container = styled.div`
display: grid;
grid-template-rows: 10rem auto;
grid-template-areas: 
"header"
"content";


#message{
    bottom: 1rem;
    right: .5rem;
}

`

export const Main = styled.main`
grid-area: content;
display: flex;
flex-direction: column;
align-items: flex-start;

width: 100%;

padding: 0rem 2rem;


header{
    display: flex;
    width: 100%;
    
    margin-top: 3rem;

    button {
        display: flex;
        align-items: center;
        
        color: ${({ theme }) => theme.COLORS.PINK};
        
        gap: .8rem;
    }
}

.titleMovie{
    display: flex;
    flex-direction: column;
    align-items: left;

    gap: 1rem;

    margin-block: 2.4rem;


    h1{
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 3.6rem;
    }


    .Stars{
        svg{
            color: ${({ theme }) => theme.COLORS.PINK};
            font-size: 2rem;
        }
    }
}

.fieldUser{
    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 0.8rem;

    margin-bottom: 4rem;

    img{
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        object-fit: cover;
    }

    span{
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    svg{
        color: ${({ theme }) => theme.COLORS.PINK};
    }
}

.tags{
    display: flex;
    gap: .8rem;
    flex-wrap: wrap;

    margin-bottom: 4rem;

    span{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }
}

.description{
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-bottom: 7rem;
}

.buttonDeleteNote{
    width: 100%;
}

`
