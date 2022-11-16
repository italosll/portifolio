import styled from 'styled-components';
import background from "../assets/backgrounds/background-about.jpg";
import { devices } from '../styles/breakingpoints';
import { BackgroundContainer } from './BackgroundContainer';

import { Title } from './Title';

 
export function SectionAbout( ):JSX.Element{

  return(
    <BackgroundContainer backgroundImage={background}>
      <ContentSection id="about-section">

        <Title>
            Sobre
        </Title>

        <Description>
          <p>
            Desenvolvo aplicações frontend profissionalmente a cerca de 
            2 anos, durante esse período implementei e corrigi 
            aplicações de gerenciamento como ERP ou sites institucionais, 
            porém também atuei no desenvolvimento de aplicações comerciais 
            que ainda não foram disponibilizadas publicamente.
          </p>
          
          <p>
            Tenho bom senso e me esforço para escrever um código limpo, que
            faça sentido e seja de fácil manutenção. Por já ter um conhecimento 
            sólido como dev frontend estou focando meus estudos no backend, 
            almejando me tornar um dev fullstack em breve :)
          </p>
        </Description>
 
      </ContentSection>
    </BackgroundContainer>    
 
  )
}
 
const ContentSection = styled.section`
    margin-left: 17px;
    margin-right: 17px;
    width: 760px;
    max-width :calc(100% - 17px - 17px);
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media ${devices.laptop} {
        overflow: visible;

      & h1{
        font-size: 6rem;
      }
    }
`

 
const Description = styled.div`
    width: 760px;
    height: auto;
    max-width :100%;
    font-size: 1.125rem;
    padding: 15px;
    margin-top: 40px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;

    border: 1px solid #0000; // Important !!!
    background:  
        linear-gradient(100deg,
            #230068, 
            #34005c) 
        padding-box
        ,
        linear-gradient(
            #00A3FF, 
            #2B002780,
            #00A3FF) 
        border-box;

        @media ${devices.laptop} {
            font-size: 1.5rem;
    }

    & p{
        text-indent: 25px;
        color:#dfdfdf;
        text-align: justify;
    }
   
`
 

 