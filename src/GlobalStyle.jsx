import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #111;
    color: #fff;
  }

  html{
    min-width: 300px ;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'SF Display', sans-serif; 
    margin: 0;
    padding: 0;
  }

  p{
    font-family: 'Times New Roman', Times, serif;
    color: #aaa;

  }
  nav{
    font-family: 'SF Display', sans-serif; 
  }
  a {
    text-decoration: none;
    /* color: #08f; */
  }

  /* 공통적인 애니메이션 */
  .fadeIn {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 1s ease-out forwards;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default GlobalStyle;
