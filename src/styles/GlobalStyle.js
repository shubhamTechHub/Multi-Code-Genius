import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  body {
    font-family: 'Gilroy-SemiBold', 'Mulish', sans-serif;
  }

  :root {
    --bg-color-green: rgb(8, 75, 62);
    --color-white: rgb(255, 255, 255);
    --color-yellow: rgb(249, 226, 186);
    --color-black: rgb(52, 52, 52);
    --color-green: rgb(0, 195, 139);
  }
`
