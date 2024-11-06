import styled from "styled-components";

export const Container = styled.span`
padding: .8rem 2rem;
background: ${({ theme }) => theme.COLORS.BACKGROUND_TAGS};

border-radius: .8rem;

font-size: 1.2rem;
color: ${({ theme }) => theme.COLORS.WHITE};
`