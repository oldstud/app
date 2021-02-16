import styled from 'styled-components'

export const ButtonSendStyle = styled.button`
margin: 0 auto 20px auto;
    width: 200px;
    height: 50px;
    line-height: 50px;
    font-size: 25px;
    font-family: 'Lato', sans-serif;
    border: 2px solid #333333;
    z-index: 55;
    color:#333333;
    position: relative;
  &:after{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #000;
    -webkit-transition: all .35s;
    -o-transition: all .35s;
    transition: all .35s;
    z-index: -5;
    }
   &:hover{
    color: #f2f2f2;
    cursor:pointer;
   }
:hover:after{
    width: 101%;
  }
  :focus{
border:none;
outline:none;
  }
`;
