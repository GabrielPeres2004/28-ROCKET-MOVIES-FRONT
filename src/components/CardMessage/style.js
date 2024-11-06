import styled from "styled-components";

export const Container = styled.div`
width: 60%;
height: max-content;

background-color: ${({ theme }) => theme.COLORS.PINK};

padding: 1rem;
border-radius: 1rem;

display: flex;
align-items: center;
justify-content: flex-start;

overflow: hidden;

position: fixed;


cursor: pointer;


button{
    background: none;
    border: none;

    position: absolute;
    top: .5rem;
    right: .5rem;

    svg{
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
}

p {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
   padding-right: 2rem;
}

transform: ${({ $IsMessage }) => ($IsMessage ? 'translateX(0%)' : 'translateX(120%)')};
transition: transform .5s ease-in-out;

@media (min-width: 850px) {
    width: 30%;
    justify-content: center;


}
` 