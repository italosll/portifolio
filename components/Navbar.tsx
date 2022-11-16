import styled from 'styled-components';
import { devices } from '../styles/breakingpoints';

 interface INavbarProps {
    onOpen: ()=>void;
 }
export function Navbar({onOpen}:INavbarProps ):JSX.Element{

  return(
 
    <Container>
      <MobileNavLinks>
        <span onClick={onOpen}>Menu</span>
      </MobileNavLinks>
            
      <NavLinks>
        <a>Início</a>
        <a>Sobre</a>
        <a>Habilidades</a>
        <a>Projetos</a>
        <a>Formação</a>
        <a>Contato</a>
      </NavLinks>
    </Container>
 
  )
}

const Container = styled.div`
    position:absolute;
    z-index:300;
    width: 100%;
    height: 40px;
    background: linear-gradient(
        180deg, 
        rgba(0, 0, 0, 0.5) 0%, 
        rgba(0, 0, 0, 0) 100%
    );
    backdrop-filter: blur(2px);
    display: flex;
    justify-content: center;



`

const NavCommmonStyles = styled.header`
    margin: 0;
    padding:0;
    width: 760px;
    max-width :100%;
    display: flex;
    color: #FFF;
    font-size: 1rem;
    font-weight: 400;
    align-items: center;
    justify-content:center;
`;

const NavLinks = styled(NavCommmonStyles)`
     column-gap: 25px;
    display:none;


    & :nth-child(1){
        margin-right: auto;
    }


    @media ${devices.laptop} {
        display: flex;
    }
`
const MobileNavLinks = styled(NavCommmonStyles)`

    display:flex;
 
 

    & :hover{
        cursor: pointer;

    }
 
    @media ${devices.laptop} {
        display: none;
    }

`;

