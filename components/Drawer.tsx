import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

interface IDrawerParams {
    isOpen: boolean;
    onClose: () => void;
}

export function Drawer({isOpen,onClose}:IDrawerParams){

  return(
 

    <Container isOpen={isOpen}>

      <DrawerArea >
        <ul>
          <li>
            <Link href="#home-section" onClick={onClose}>
                Início
            </Link>
          </li>
          <li>
            <Link href="#about-section" onClick={onClose}>
                Sobre
            </Link>
          </li>
          <li>
            <Link href="#skills-section" onClick={onClose}>
                Habilidades
            </Link>
          </li>
          <li>
            <Link href="#projects-section" onClick={onClose}>
                Projetos
            </Link>
          </li>
          <li>
            <Link href="#experiences-section" onClick={onClose}>
                Experiência
            </Link>
          </li>
          <li>
            <Link href="#education-section" onClick={onClose}>
                Educação
            </Link>
          </li>
          <li>
            <Link href="#contact-section" onClick={onClose}>
                Contato
            </Link>
          </li>
        </ul>
              
        <Image
          onClick={onClose}
          src="/icons/icon-close.svg"
          width="31"
          height="31"
          alt=""
        />
      </DrawerArea>
      <GradientBorder/>
      <CloseArea onClick={onClose}/>
    </Container>
 

  )
}

const Container = styled.div<{isOpen:boolean}>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    position: fixed;
    margin:0;
    left: ${(props)=> props?.isOpen ? "0" :"-100%"};
    transition: 300ms left cubic-bezier(0.77, 0, 0.175, 1);
    z-index: 999;
`

const DrawerArea = styled.div`
    width: 300px;
    height: 100%;
    background: rgba(0, 0, 0, 0.51);
    backdrop-filter: blur(20px);
    display: flex;
    flex-direction: column;
    margin:0;
    transition: 300ms left cubic-bezier(0.77, 0, 0.175, 1);

    & ul{
        padding: 0px;
        list-style-type: none;  
 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 27px ;
        margin-bottom: auto;
        margin-top: auto;
    }

    & li{
        list-style-type: none;  
        padding: 0px;
        margin: 0px;
        width: fit-content;
 
        }

        &  li:last-of-type {
            background: red;
        }

        & img{
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 40px;
            :hover{
                cursor: pointer;
            }
        }
    
   
`
const GradientBorder = styled.div`
    width: 1px;
    background: 
    linear-gradient(
        180deg, 
        #989898 0%,
        rgba(255, 255, 255, 0) 48.44%, 
        #989898 100%
    );
    backdrop-filter: blur(20px);
   
`


const CloseArea = styled.div`
    width: calc(100% - 300px - 1px);
    height: 100%;
    background: rgba(0, 0, 0, 0.45);
    backdrop-filter: blur(5px);
    margin:0;
    transition: 300ms left cubic-bezier(0.77, 0, 0.175, 1);    
    
    & :hover{
        cursor: pointer;
    }
`



  