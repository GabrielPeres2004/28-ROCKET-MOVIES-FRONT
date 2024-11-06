import styled from "styled-components";

export const Container = styled.button`
width: 100%;
height: 5.6rem;
padding: 1rem;
border: none;
border-radius: 1rem;
background-color: ${({ theme }) => theme.COLORS.PINK};

color: ${({ theme }) => theme.COLORS.BACKGROUND_900};


display: flex;
align-items: center;
justify-content: center;
gap: 1rem;


&:disabled {
    opacity: .8;
  }

  .spin {
    animation: spin 3s linear infinite;
    color: black;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

`