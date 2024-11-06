import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;

width: 100%;

border-radius: 1.6rem;

padding: 3.2rem 2.2rem;

background-color: rgba(255, 133, 155, 0.05);

margin-bottom: 2rem;

margin-inline: auto;

cursor: pointer;

h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2.4rem;
    margin-bottom: .8rem;
}


.Stars{
    display: flex;
    align-items: center;
    gap: .3rem;
    margin-bottom: 1.6rem;

    svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 1.8rem
    }  
}

.Description{
    width: 100%;
    overflow: hidden;

    p {
        width: 100%;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        
        margin-bottom: 2.2rem;
        margin-inline: auto;

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
}


footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

}



`