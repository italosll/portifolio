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

