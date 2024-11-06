import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;


    font-size: 1.6rem;

    text-decoration: none;
    list-style: none;

}

::-webkit-scrollbar {
  width: 8px;  

}

::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.COLORS.PINK}; 
  border-radius: 10px;
  transition: filter 0.2s;
}

::-webkit-scrollbar-thumb:hover {
  filter: brightness(0.9);
  
  cursor: pointer;
}


:root {
    font-size: 62.5%;
}

body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
}

:root, button , a , input{
    font-family: "Roboto Slab", serif;
}

button, a {
    cursor: pointer;
    transition: filter .5s;

}

button:hover , a:hover{
    filter: brightness(0.9);
}

`