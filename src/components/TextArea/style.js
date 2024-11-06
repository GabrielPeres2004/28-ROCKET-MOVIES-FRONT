import styled from "styled-components";

export const Container = styled.textarea`
width: 100%;
height: 24.2rem;

resize: none;

border: none;
border-radius: 1rem;

outline: none;

padding: 1rem 1.2rem;

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
color: ${({ theme }) => theme.COLORS.GRAY_100};

`