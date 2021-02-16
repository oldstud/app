import styled from "styled-components"


export const TAreaStyle = styled.textarea`
resize:none;

border-color:transparent;
background-color:#000;
color:#fff;
font-size: 1.5em;

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