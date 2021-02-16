import styled from 'styled-components'

export const CustomInpitStyle = styled.input`

border-color:transparent;
background-color:#000;
color:#fff;
font-size: 1.5em;

height:35px;
outline:none;
width:80%;
margin:10px;
::placeholder {
    color: #858585;
    font-style:italic;
    font-size: 1em;
  }
  :focus{
    background-color:#858585;
}

`;
