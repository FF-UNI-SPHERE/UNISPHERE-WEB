import styled from "styled-components";

function Button({ children, onClickFunction }) {
  return (<div><StyledButton onClick={onClickFunction}>{children}</StyledButton></div>);
}

const StyledButton = styled.button`
  margin: 10px;
  width: 16.53%;
  height: 8vh;
  border: none;
  font-family: 'Godo', sans-serif;
  font-size: 1.6vw;
  padding: var(--button-padding, 12px 16px);
  border-radius: var(--button-radius, 50px);
  background: var(--button-bg-color, #d9d9d9);
  color: var(--button-color, #ffffff);
  box-shadow: 5px 5px 5px 0px gray;
  
  cursor: pointer;
  &:active,
  &:hover {
    background: var(--button-hover-bg-color, #5e5e5e);
  }
  // 고도체
  @font-face {  
    font-family: 'Godo';
    font-style: normal;
    font-weight: 700;
    src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff') format('woff');
  }
`;

export default Button;