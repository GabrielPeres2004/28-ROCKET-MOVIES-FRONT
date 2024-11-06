import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  border-radius: 1rem;

  background-color: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
  
  border: ${({ theme, $isNew }) => $isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

  padding-right: .8rem; 

  
  button { 
    display:flex; 
    align-items:center; 

    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};
    
  }
  

input {
    width: 100%;
    padding: 1.2rem;

    background: transparent;
    
    color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};
        
    border: none;
    outline: none; 

    &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
}
}


`


