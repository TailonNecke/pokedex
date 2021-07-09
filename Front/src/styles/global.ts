import { createGlobalStyle } from 'styled-components';
import fundo from '../imagem/aa.jpg';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background-image: url(${fundo});
  background-image: linear-gradient;
  -webkit-font-smoothing: antialiased;
}

body, input, bottun {
  font: 16px Roboto, sans-serif;
}

#root {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}

button {
  cursor: pointer;
}
`;
