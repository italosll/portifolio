import Image from 'next/image';
import styled from 'styled-components';
import background from "../assets/backgrounds/background-education.jpg";
import { devices } from '../styles/breakingpoints';
import { BackgroundContainer } from './BackgroundContainer';

import { Title } from './Title';

 
export function SectionEducation( ):JSX.Element{

  const experiences =[
    {
      srcCover:"/images/education-rocketseat.jpg",
      title:"Ignite (Trila react)",
      institution:"Rocketseat",
      period:"2022",
      // eslint-disable-next-line max-len
      description:"Classificado como curso online, o Ignite vai muito além do básico, sendo praticamente uma especialização. A trilha de React aborda os principais conceitos da biblioteca mas não para por aí, são 5 módulos e ao finalizar cada módulo, voce também finaliza uma aplicação que contém todos os conceitos aprendidos nas aulas formando parte do seu portfólio para futuras consultas.",
      
    },
    
    {
      srcCover:"/images/education-ifgoiano.svg",
      title:"Bacharel em Ciência da Computação",
      institution:"Brainny Smart Solutions · Full-time",
      period:"2017-2022",
      // eslint-disable-next-line max-len
      description:"Mesmo sendo um curso generalista, Ciência da computação aborda pontos fundamentais do desenvolvimento de aplicações. Durante o curso eu tive a oportunidade de aprender sobre algoritmos, banco de dados, padrões de projetos, orientação a objetos, estrutura de dados, análise de complexidade e diversos outros temas. Sempre participei de atividades de extensão como congressos e viagens. Nas atividades de pesquisa publiquei e apresentei artigos, escrevi meu trabalho de conclusão de curso, que foi publicado em uma revista internacinal com novo qualis A3.",
 
    },
 
 
  ]

  return(
    <BackgroundContainer backgroundImage={background}>
      <ContentSection id="education-section">

        <Title>
            Educação
        </Title>

        <ExperiencesConainer>
          
          {experiences.map((project,key)=>(
            <CardItem
              key={key} 
              {...project}
            />
          
          ))}
        </ExperiencesConainer>
 
      </ContentSection>
    </BackgroundContainer>    
 
  )
}

interface ICardItem {
  srcCover: string;
  title: string;
  description:string,
  institution:string,
  period:string,
  link?:string,

}

function CardItem({
  srcCover,
  title,
  description,
  institution,
  period,
  link,
}:ICardItem):JSX.Element{

  return(
    <Card>
      <div>

        <Image alt="a" src={srcCover} width="106" height="106"/>
        <div>
          <h2>{title}</h2>
          <a>{institution}</a>
          <a>{period}</a>
          <p>{description}</p>
        </div>
      </div>
      <p>{description}</p>


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
    border-radius: 8px;

    width: 100%;
    max-width :100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap:10px;
    font-size: 0.875rem;
 
    background: linear-gradient(
      120.57deg, 
      rgba(21, 0, 80, 0.4) 22%, 
      rgba(187, 163, 255, 0.1) 60.85%, 
      rgba(42, 29, 64, 0.4) 106.56%
    );
    
    *{
      padding: 0;
      margin: 0;
    }

    & :nth-child(1){
      display: flex;
      gap:10px
    }

    & img ~ div{
 
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    
    & h2{
      font-size: 1.25rem;
      max-width: 200px;
    }

    & a{
      width: 100%;
      text-align: justify;
    }
    
    & p{
      width: 100%;
      text-align: justify;
      margin-top: 10px;
      line-height: 18px;
    }
    
    & img{
      border-radius: 5px;
    }

    & a ~ p{
      display: none;
    }

    & div ~ p {
        display:flex;
    }

    @media ${devices.laptop} {

      & a ~ p{
        display: flex;
      }
    
      & div ~ p {
        display: none;
      }

      & h2{
        max-width: 100%;
      }
    }
`

 
const ExperiencesConainer = styled.div`
  margin-top: 30px;
  overflow-y:auto;
  height: 75%;

  display: flex;
  flex-direction: column;
  gap: 18px;
  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  & {
    scrollbar-width: auto;
    scrollbar-color: #00000001 #ffffff01;
  }

  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 0px;
  }
`;
 
 

 