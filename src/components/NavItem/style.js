import styled from 'styled-components'


export const NavLink = styled.a`
text-decoration:none;
color:#fff;
padding:20px;
background-color:#000;
&:hover{
    text-decoration:underline;
}
@media screen and (max-width:480px){
padding:0;

}
`;
