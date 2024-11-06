import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 100%;

h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-bottom: 2rem;
}

` 