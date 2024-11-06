import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;

width: 100%;
height: 5.6rem;

padding: 1.6rem 1rem;

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
color: ${({ theme }) => theme.COLORS.GRAY_100};

border-radius: 1rem;


input {
    width: 100%;
    background: transparent;   
    border: none;
    outline: none;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    &::placeholder{
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
}    


svg {
    margin-inline: 1rem;
}

`