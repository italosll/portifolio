import Image from 'next/image';
import styled from 'styled-components';
import background from "../assets/backgrounds/background-skills.jpg";
import { devices } from '../styles/breakingpoints';
import { BackgroundContainer } from './BackgroundContainer';

import { Title } from './Title';

 
export function SectionSkills( ):JSX.Element{

  const skills =[
    {
      srcIcon:"/icons/icon-react.svg",
      title:"Criação de sites reativos",
      isCurrentlyStuding:false
    },
    {
      srcIcon:"/icons/icon-next.svg",
      title:"SSG / Default SSR / SEO",
      isCurrentlyStuding:false
    },
    {
      srcIcon:"/icons/icon-ui-librarys.svg",
      title:"Implementação de UI com libs",
      isCurrentlyStuding:false
    },
    {
      srcIcon:"/icons/icon-jest.svg",
      title:"Automação de testes no frontend",
      isCurrentlyStuding:false
    },
    {
      srcIcon:"/icons/icon-apis.svg",
      title:"Consumo de APIs Rest e Graphql",
      isCurrentlyStuding:false
    },
    {
      srcIcon:"/icons/icon-ts-html-css.svg",
      title:"Domínio de linguagens web",
      isCurrentlyStuding:false
    },
    {
      srcIcon:"/icons/icon-figma.svg",
      title:"Criação de designs com figma",
      isCurrentlyStuding:false
    },
    {
      srcIcon:"/icons/icon-sql-server.svg",
      title:"SQL server",
      isCurrentlyStuding:true
    },
    {
      srcIcon:"/icons/icon-dot-net.svg",
      title:"Frameworks .NET",
      isCurrentlyStuding:true
    },
    {
      srcIcon:"/icons/icon-c-sharp.svg",
      title:"Linguagem c#",
      isCurrentlyStuding:true
    }
  ]

  return(
    <BackgroundContainer backgroundImage={background}>
      <ContentSection id="skills-section">

        <Title>
            Habilidades
        </Title>

        <SkillsConainer>

          {skills.map((skill,key)=>(
            <CardItem
              key={key} 
              {...skill}
            />
          
          ))}
        </SkillsConainer>
 
      </ContentSection>
    </BackgroundContainer>    
 
  )
}

interface ICardItem {
  srcIcon: string;
  title: string;
  isCurrentlyStuding?: boolean;
}

export function CardItem({
  srcIcon,
  title,
  isCurrentlyStuding=false
}:ICardItem):JSX.Element{

  return(
    <Card>
      <Image alt="a" src={srcIcon} width="30" height="30"/>
      <a>{title}</a>
      {isCurrentlyStuding?(
        <span>Atualmente <br/> estudando</span>
      ) : null}
    </Card>
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
    margin-top: 40px;
    justify-content:center;
         
    @media ${devices.laptop} {
        overflow: visible;
        
        & h1{
          font-size: 6rem;
        }

    }


`

 
const Card = styled.div`
    width: 100%;
    height: auto;
    max-width :100%;
    font-size: 1rem;
    padding: 4px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    column-gap: 16px;
 
 
    background: linear-gradient(
      90.57deg, 
      rgba(15, 0, 56, 0.3404) 22.85%, 
      rgba(154, 154, 154, 0.222) 106.56%
    );

    @media ${devices.laptop} {
      font-size: 1.125rem;
      height: 60px;
      padding: 13px;
    }

    & img{
        width: 30px;
        height: 30px;

        @media ${devices.laptop} {
          width: 35px;
          height: 35px;
        }
    }

    & span{
      font-size: 0.875rem;
      color:#efefef89;
      text-align: center;
      margin-left: auto;
    }
`


const SkillsConainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap:10px;
  
  @media ${devices.laptop} {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
      grid-gap:18px;
    }
`;
 

 