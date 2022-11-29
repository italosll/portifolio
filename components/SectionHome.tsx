import Image from 'next/image';
import styled from 'styled-components';
import background from "../assets/backgrounds/background-home.jpg";
import { devices } from '../styles/breakingpoints';
import { BackgroundContainer } from './BackgroundContainer';
import { Photos } from './Photos';

import { Title } from './Title';

 
export function SectionHome( ):JSX.Element{

  return(
    <BackgroundContainer backgroundImage={background}>
      <ContentSection id="home-section">
        <Greetings>
          <Title>
                Helou!
          </Title>
          <Photos/>
        </Greetings>

        <Description>
            Meu nome é <strong> Ítalo Silva </strong>
        </Description>

        <About>
            Sou desenvolvedor frontend Júnior e esse é o meu <a>
            pedacinho</a> na internet,
            Sinta se em casa :)
        </About>
        <a href="/cv-italo-moreira-silva.pdf" download> 

          <button type="button"> 
            <Image
              alt="icone de baixar documento"
              width="15" 
              height="18" 
              src="/icons/icon-cv-download.svg" />
              Baixar Curriculo</button>
        </a>
      </ContentSection>
    </BackgroundContainer>    
 
  )
}
 
const ContentSection = styled.section`
    width: 760px;
    max-width :100%;
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media ${devices.laptop} {
        overflow: visible;
    }

    & div ~ a {
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
   
        width: 335px;
        max-width: 100%;
        
        @media ${devices.laptop} {
            width: 100%;
            max-width: 100%;
        }
    }
    
    & button {
        transition-duration: 0.2s;
        background: #4400ff48;
        border: 1px solid #2C01A6;
        font-size: 1rem;
        display: flex;
        gap: 10px;
        padding: 10px;
        border-radius: 5px;
        width: 100%;


        :hover{
            background: #2C01A6;
            cursor: pointer;
            transform: scale(1.05);
        }

        :active{
            background: #21007b;
            border: 1px solid #ffffff;    
        }

        @media ${devices.laptop} {
            width: fit-content;

        }
    }

 

`

const Greetings = styled.section`
    width: 100%;
    max-width :100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
 
 
    & h1{
        margin-top:-85px;
        z-index: 20;
        margin-left: auto;
        margin-right: auto;
        font-size: 7rem;
    }

    @media ${devices.laptop} {
        flex-direction :row ;

        & #photos{
            margin-left: auto;
        }

        & h1{
            margin-top:65px;
            margin-left: 0;
            margin-right: 0;
        }
  }
`
const Description = styled.div`
    width: 760px;
    max-width :100%;
    font-size: 1.6875rem;
    width: 335px;
    max-width: 100%;
    margin-top: 18px;
    margin-left: auto;
    margin-right: auto;
    
 
    @media ${devices.laptop} {
        font-size:3rem;
        width: 100%;
    }
`

const About = styled.div`
    font-size: 1.2875rem;
    font-weight: 400;
    width: 335px;
    max-width: 100%;
    margin-top: 18px;
    margin-left: auto;
    margin-right: auto;
    
    & a{
        color: #00F0FF;
    }

    @media ${devices.laptop} {
        font-size:2.5rem;
        width: 100%;
 

    }
`

