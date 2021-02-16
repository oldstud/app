import styled from 'styled-components';
import ImgSrc from './images/header.jpg'

export const HeaderStyle = styled.header`
width:100%;
height:200px;
background: url(${ImgSrc});
background-size:cover;
display:flex;
align-items:center;
font-size:36px;
border-bottom:5px solid #fff;
@media screen and (max-width:480px){
flex-direction:column;
align-items: flex-start;
justify-content:center;
}
`;